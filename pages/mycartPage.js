import { root, router } from "../main";

export function mycartPageWrapper(){
  mycartPage()
  showDeletProduct()
  checkout()
  cancleDelet()
  backHome()
  mycart()
}

function showModal() {
  document.getElementById('modal').classList.remove('hidden');
}

function hideModal() {
  document.getElementById('modal').classList.add('hidden');
}

function mycartPage(){
  root.innerHTML =`
    <div class="mx-8 my-6">
      <div class="flex flex-row justify-between">
        <div class="flex justify-start items-center  gap-4">
          <img src="images/logo2.png" class="w-6 h-8  mt-10">
          <div class=" mt-10  font-bold text-xl">My Cart</div>
        </div>
        <div>
          <i class="fa-solid fa-magnifying-glass pt-12"></i>
        </div>
      </div>
    </div>
    <!-- cards -->
    <div id="cart-items-container" class="mx-4 my-6 scroll-container">
    </div>

    <!-- modal -->
    <div id="modal" class="bg-zinc-100 rounded-3xl py-1 hidden bg-opacity-50 animate-slide-up">
      <div class="font-bold text-3xl flex justify-center items-center">Remove From Cart?</div>
      <div class="mx-4 my-6">
        <div class="bg-gray-50 rounded-3xl flex flex-row gap-8  py-3">
          <div class="flex items-center">
            <img id="modal-image" src="">
          </div>
          <div class="justify-center  flex flex-col gap-3">
            <div class="flex flex-row gap-2 justify-between">
              <p id="modal-product-name" class="font-semibold text-xl"></p>
              <i class="fa-solid fa-trash pt-3"></i>
            </div>
            <p id="modal-product-details" class="text-zinc-500"></p>
            <div class="flex flex-row justify-between gap-6 items-center">
              <p id="modal-product-price" class="font-medium text-base"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center my-8 gap-2">
        <button id="cancle" class="border-2 bg-slate-100 rounded-full w-44 h-16 text-black hover:bg-black hover:text-white" onclick="hideModal()">Cancel</button>
        <button id="remove" class="border-2 bg-slate-100 rounded-full w-44 h-16 text-black hover:bg-black hover:text-white" onclick="hideModal()">Yes, Remove</button>
      </div>
    </div>
        
    <!-- totalPrice -->
    <div class="flex flex-row justify-start items-center">
      <div class="px-8 mt-7 gap-6 flex flex-col">
        <span>Total Price</span>
        <div id="total-price" class="font-bold text-3xl">$0</div>
      </div>
      <div class="mt-5">
        <button id="checkout" class="border-2 bg-zinc-900 rounded-full w-64 h-20 text-white">Check Out</button>
      </div>
    </div>
    
    <footer class="fixed bottom-0 w-full">
      <div class="flex gap-x-11 justify-center p-4 border-t-2 border-neutral-200">
        <div id="home" class="flex flex-col items-center justify-between">
          <img src="images/house-door-fill.png">
          <p class="text-[10px] font-semibold">Home</p>
        </div>
        <div id="mycart" class="flex flex-col items-center justify-between">
          <img src="images/bag.png">
          <p class="text-[10px] font-semibold">Cart</p>
        </div>
        <div class="flex flex-col items-center justify-between">
          <img src="images/cart2.png">
          <p class="text-[10px] font-semibold">Orders</p>
        </div>
        <div class="flex flex-col items-center justify-between">
          <img src="images/wallet2.png">
          <p class="text-[10px] font-semibold">Wallet</p>
        </div>
        <div class="flex flex-col items-center justify-between">
          <img src="images/person.png">
          <p class="text-[10px] font-semibold">Profile</p>
        </div>
      </div>
    </footer>
  `;

  loadCartItems();
}


function loadCartItems() {
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  let totalPrice = 0;
  
  cart.forEach(item => {
    totalPrice += item.price * item.quantity;

    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'bg-gray-50 rounded-3xl flex flex-row gap-8 px-4 py-5 mb-4';
    cartItemElement.innerHTML = `
      <div class="flex items-center">
        <img src="${item.imageURL}">
      </div>
      <div class="justify-center flex flex-col gap-3">
        <div class="flex flex-row gap-2 justify-between">
          <p class="font-semibold text-xl">${item.name}</p>
          <i class="fa-solid fa-trash pt-3 trash-icon" data-id="${item.id}"></i>
        </div>
        <p class="text-zinc-500">Size: ${item.size}</p>
        <div class="flex flex-row justify-between gap-6 items-center">
          <p class="font-medium text-base">$${item.price}</p>
          <div class="bg-gray-200 rounded-xl flex justify-center text-center px-2 py-1">
            <button class="font-bold px-3 decrease-quantity" data-id="${item.id}">
              <i class="fa-solid fa-minus pt-1"></i>
            </button>
            <span class="text-lg pt-1 quantity" data-id="${item.id}">${item.quantity}</span>
            <button class="font-bold px-3 increase-quantity" data-id="${item.id}">
              <i class="fa-solid fa-plus pt-1"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    cartItemsContainer.appendChild(cartItemElement);
  });

  document.getElementById('total-price').textContent = `$${totalPrice}`;

  // Event listeners for increase and decrease buttons
  document.querySelectorAll('.increase-quantity').forEach(button => {
    button.addEventListener('click', (e) => {
      const id = e.target.closest('button').dataset.id;
      updateQuantity(id, 1);
    });
  });

  document.querySelectorAll('.decrease-quantity').forEach(button => {
    button.addEventListener('click', (e) => {
      const id = e.target.closest('button').dataset.id;
      updateQuantity(id, -1);
    });
  });

  // Event listeners for delete buttons
  document.querySelectorAll('.trash-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      removeFromCart(id);
    });
  });
}

function updateQuantity(id, change) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart = cart.map(item => {
    if (item.id === id) {
      item.quantity += change;
      if (item.quantity < 1) item.quantity = 1;
    }
    return item;
  });

  localStorage.setItem('cart', JSON.stringify(cart));
  mycartPage();  // Refresh the cart page
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== id);

  localStorage.setItem('cart', JSON.stringify(cart));
  mycartPage();  // Refresh the cart page
}

function showDeletProduct(){
  // This function is no longer needed
}

function cancleDelet(){
  const cancleDelet = document.getElementById("cancle");
  if (cancleDelet) {
    cancleDelet.addEventListener("click", hideModal);
  }
}

function checkout(){
  const checkout = document.getElementById("checkout")
  if (checkout) {
    checkout.addEventListener("click", () => {
      router.navigate("/checkout")
    });
  }
}

function backHome(){
  const backhome = document.getElementById("home")
  if (backhome) {
    backhome.addEventListener("click", () => {
      router.navigate("/products")
    });
  }
}
  
function mycart(){
  const myCart = document.getElementById("mycart")
  if (myCart) {
    myCart.addEventListener("click", () => {
      router.navigate("/mycart")
    });
  }
}

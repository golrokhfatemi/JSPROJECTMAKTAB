import httpServer from "../api";
import { root, router } from "../main";

export async function productInfoPageWrapper(match) {
  const data = await productInfoApi(match.data.id);
  // console.log(match.data.id);
  productInfoPage(data);
  if (document.querySelector(".color-wrapper")) {
    data.colors.map((item) => {
      document.querySelector(
        ".color-wrapper"
      ).innerHTML += `<button id="${item}" class="color-select bg-brand-${item} rounded-full w-9 h-9 mr-1"></button>`;
    });
  }
  if (document.querySelector(".size-wrapper")) {
    data.sizes.map((item) => {
      document.querySelector(
        ".size-wrapper"
      ).innerHTML += `<button id="${item}" class="size-select rounded-full w-9 h-9 mr-1 border-2 border-slate-800">${item}</button>`;
    });
  }

  const numberElement = document.getElementById("number");
  const increaseButton = document.getElementById("increase");
  const decreaseButton = document.getElementById("decrease");
  const totalPriceDisplay = document.getElementById("total-price");

  

  function updateTotalPrice() {
    let count = 0;
    let totalPrice ;
    
    

    increaseButton.addEventListener("click", () => {
      console.log(data);
      console.log(data.price);
      count++;
      totalPrice = data.price * count;
      totalPriceDisplay.innerText = `$${totalPrice}`;
      numberElement.textContent = count;
    });

    decreaseButton.addEventListener("click", () => {
      if (count > 0) count--;
      totalPrice = data.price * count;
      totalPriceDisplay.innerText = `$${totalPrice}`;
      numberElement.textContent = count;
    });
  }

  updateTotalPrice();
  addToCart(data);
}

function productInfoPage(product) {
  // console.log(product.colors);

  root.innerHTML = `
    <div class="h-screen w-full flex-grow">
        <!-- slider --> 
            <div class="bg-slate-500 flex justify-center items-center w-full h-64">
              <img src="${product.imageURL}3.png">    
            </div>
        <!-- main -->
            <div class="flex justify-between px-8 mt-7  ">
                  <div class="font-extrabold text-3xl">${product.name}</div>
                  <div><img src="images/heart.svg" class="pt-2"></div>
            </div>

            <div class="flex px-8 mt-7 gap-4 ">
              <div class="bg-slate-200 rounded-xl w-28 flex justify-center items-center h-12">5.371 sold</div>
              <div class=" flex justify-center items-center "><i class="fa-solid fa-star"></i></div>
              <div class=" flex justify-center items-center ">4.3(5.389 rewives)</div>
            </div>


            <div class="px-8 mt-7 gap-4 flex flex-col">
              <h3 class="font-bold text-2xl">Description</h3>
              <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit libero sunt veritatis.</p>
            </div>
          <!-- size & color -->
            <div class="px-8 mt-7 gap-6 flex flex-row ">
              <div class="flex flex-col">
                  <p class="font-semibold text-lg py-3">Size</p>
                  <div class="flex flex-row gap-3 size-wrapper">
                   


                  </div>
              </div>
             
              <div class="flex ">
                <p class="font-semibold text-lg py-3">Color</p>
                <div class="color-wrapper flex justify-center items-end overflow-x-scroll">
                    


                </div>
              </div>
            </div>

            <!-- quantity -->
             <div class="flex justify-between px-8 mt-7 border-b-2">
              <div class="flex flex-row gap-8 text-center justify-center mb-6">
                <div class="font-bold text-2xl pt-3">Quantity</div>
                <!-- counter -->
                <div class="w-32 h-14 bg-slate-100 rounded-3xl flex justify-center text-center">
                  <button id="decrease" class="font-bold py-2 px-4">
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <span id="number" class="text-2xl pt-3">0</span>
                  <button id="increase" class="font-bold py-2 px-4 ">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
             </div>

             <!-- totalPrice -->
              <div class="flex flex-row justify-start items-center">
                <div class="px-8 mt-7 gap-6 flex flex-col ">
                  <span>Total Price</span>
                  <div id="total-price" class="font-bold text-3xl">$0</div>
                </div>
                <div class=" mt-5">
                  <button id="add-to-cart" class="border-2 bg-zinc-900 rounded-full w-64 h-20 text-white">Add To Cart</button>
                </div>
              </div>
                
      </div>
      
      
       
        
    
    <footer class="footer">
          <div class="flex gap-x-11 justify-center p-4 border-t-2 border-neutral-200">
               <div id="home" class="flex flex-col items-center justify-between footer-item">
               <img src="images/house-door-fill.png">
               <p class="text-[10px] font-semibold">Home</p>
               </div>

               <div id="mycart" class="flex flex-col items-center justify-between footer-item">
               <img src="images/bag.png">
               <p class="text-[10px] font-semibold">Cart</p>
               </div>

               <div class="flex flex-col items-center justify-between footer-item">
               <img src="images/cart2.png">
               <p class="text-[10px] font-semibold">Orders</p>
               </div>

               <div class="flex flex-col items-center justify-between footer-item">
               <img src="images/wallet2.png">
               <p class="text-[10px] font-semibold">Wallet</p>
               </div>

               <div class="flex flex-col items-center justify-between footer-item">
               <img src="images/person.png">
               <p class="text-[10px] font-semibold">Profile</p>
               </div>
          </div>
     </footer>
    <div class="bg-brand-black bg-brand-red bg-brand-blue bg-brand-brown bg-brand-white hidden"></div>
    `;
}

async function productInfoApi(id) {
  const response = await httpServer.get(`/products/${id}`);
  return response.data;
}

function addToCart(product) {
  let selectedColor = null;
  let selectedSize = null;


  document.querySelectorAll('.color-select').forEach(button => {
    button.addEventListener('click', (event) => {
      console.log(event.target.id.split('-'));
      console.log(event.target.id);
      selectedColor = event.target.id.split('-');
      document.querySelectorAll('.color-select').forEach(btn => btn.classList.remove('selected'));
      event.target.classList.add('selected');
    });
  });

  document.querySelectorAll('.size-select').forEach(button => {
    button.addEventListener('click', (event) => {
      console.log(event.target.id);
      selectedSize = event.target.id.split('-');
      document.querySelectorAll('.size-select').forEach(btn => btn.classList.remove('selected'));
      event.target.classList.add('selected');
    });
  });




  const addToCart = document.getElementById("add-to-cart");
  addToCart.addEventListener("click", () => {
    const numberElement = document.getElementById("number");
    const quantity = parseInt(numberElement.textContent);
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      color: selectedColor,
      size: selectedSize,
      imageURL: product.imageURL,
    };

   
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
    } else {
      cart = [];
    }

   
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    router.navigate("/mycart");
  });
}

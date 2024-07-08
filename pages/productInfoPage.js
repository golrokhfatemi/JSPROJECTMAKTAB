import httpServer from "../api"
import { root } from "../main"


export async function productInfoPageWrapper(match){
const data = await productInfoApi(match.data.id)
console.log(match.data.id);
productInfoPage(data)
if (document.querySelector(".color-wrapper")) {
  data.colors.map((item) => {
    document.querySelector(".color-wrapper").innerHTML += `<button id="${item}" class="color-select bg-brand-${item} rounded-full w-9 h-9 mr-1"></button>`
    });    
}
if (document.querySelector(".size-wrapper")) {
  data.sizes.map((item) => {
    document.querySelector(".size-wrapper").innerHTML += `<button id="${item}" class=" rounded-full w-9 h-9 mr-1 border-2 border-slate-800">${item}</button>`
    });    
}
}


function productInfoPage(product){
  console.log(product.colors);
  
    root.innerHTML = `
    <div class="h-screen w-full">
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
              <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit libero sunt veritatis, possimus molestiae non aspernatur iste obcaecati nobis.</p>
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
                  <div class="font-bold text-3xl">$ 240</div>
                </div>
                <div class=" mt-5">
                  <button class="border-2 bg-zinc-900 rounded-full w-64 h-20 text-white">Add To Cart</button>
                </div>
              </div>
                
      </div>
      
      
       
        
    
    <footer>
      <div class="flex gap-x-11 justify-center p-4 border-t-2 border-neutral-200">
            <div class="flex flex-col items-center justify-between">
              <img src="images/house-door-fill.png">
              <p class="text-[10px] font-semibold">Home</p>
            </div>

            <div class="flex flex-col items-center justify-between">
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
    <div class="bg-brand-black bg-brand-red bg-brand-blue bg-brand-brown bg-brand-white hidden"></div>
    `
}


async function productInfoApi(id){
  const response = await httpServer.get(`/products/${id}`)
  return response.data
}
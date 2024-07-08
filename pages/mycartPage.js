import { root } from "../main";



export function mycartPageWrapper(){
mycartPage()
}

function mycartPage(){
    root.innerHTML =`
    
     <div class="mx-8 my-6">
      <div class="flex flex-row justify-between">
          <div class="flex justify-start items-center  gap-4">
            <img src="images/logo2.png" class="w-6 h-8  mt-10">
            <div class=" mt-10  font-bold text-xl">My Cart</div>
          </div>
          <div >
            <i class="fa-solid fa-magnifying-glass pt-12"></i>
          </div>
      </div>
    </div>
    <!-- cards -->
    <div class="mx-4 my-6">
      <div class="bg-gray-50 rounded-3xl flex flex-row gap-8 px-4 py-5">
            <div class="flex items-center">
              <img src="images/shoe 4.png">
            </div>
            <div class="justify-center  flex flex-col gap-3 ">
              <div class="flex flex-row gap-2 justify-between ">
                <p class="font-semibold text-xl">Air Jordan Retro</p>
                <i class="fa-solid fa-trash" class="pt-3" id="trash-icon" onclick="showModal()"></i>
              </div>
              
              <p class="text-zinc-500">Black | Size = 42</p>
              <div class="flex flex-row justify-between gap-6 items-center">
                <p class="font-medium text-base">$105,00</p>
                <!-- counter -->
                <div class=" bg-gray-200 rounded-xl flex justify-center text-center px-2 py-1">
                  <button id="decrease" class="font-bold  px-3">
                    <i class="fa-solid fa-minus pt-1"></i>
                  </button>
                  <span id="number" class="text-lg pt-1">0</span>
                  <button id="increase" class="font-bold px-3 ">
                    <i class="fa-solid fa-plus pt-1"></i>
                  </button>
                </div>
              </div> 
            </div>
        </div>
      </div>

    <!-- modal -->
     <div id="modal" class="bg-zinc-100 rounded-3xl py-1 hidden bg-opacity-50 animate-slide-up">
          <div class="font-bold text-3xl flex justify-center items-center ">Remove From Card ?</div>

          <div class="mx-4 my-6">
            <div class="bg-gray-50 rounded-3xl flex flex-row gap-8  py-3">
                  <div class="flex items-center">
                    <img src="images/shoe 4.png">
                  </div>
                  <div class="justify-center  flex flex-col gap-3">
                    <div class="flex flex-row gap-2 justify-between">
                      <p class="font-semibold text-xl">Air Jordan Retro</p>
                      <i class="fa-solid fa-trash pt-3"  ></i>
                    </div>
                    
                    <p class="text-zinc-500">Black | Size = 42</p>
                    <div class="flex flex-row justify-between gap-6 items-center">
                      <p class="font-medium text-base">$105,00</p>
                      <!-- counter -->
                      <div class=" bg-gray-200 rounded-xl flex justify-center text-center px-2 py-1">
                        <button id="decrease" class="font-bold  px-3">
                          <i class="fa-solid fa-minus pt-1"></i>
                        </button>
                        <span id="number" class="text-lg pt-1">0</span>
                        <button id="increase" class="font-bold px-3 ">
                          <i class="fa-solid fa-plus pt-1"></i>
                        </button>
                      </div>
                    </div> 
                  </div>
              </div>
            </div>


          <div class="flex justify-center items-center my-8 gap-2">
            <button class="border-2 bg-slate-100 rounded-full w-44 h-16 text-black hover:bg-black hover:text-white" onclick="hideModal()">Cancle</button>
            <button class="border-2 bg-slate-100 rounded-full w-44 h-16 text-black hover:bg-black hover:text-white" onclick="hideModal()">Yes , Remove</button>
          </div>

     </div>

        
             <!-- totalPrice -->
              <div class="flex flex-row justify-start items-center">
                <div class="px-8 mt-7 gap-6 flex flex-col ">
                  <span>Total Price</span>
                  <div class="font-bold text-3xl">$ 240</div>
                </div>
                <div class=" mt-5">
                  <button class="border-2 bg-zinc-900 rounded-full w-64 h-20 text-white">Chech Out</button>
                </div>
              </div>
         
      </div>
      
      
       
        
    
    <footer class="fixed bottom-0 w-full">
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

    `
}
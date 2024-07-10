import { root } from "../main";



export function checkoutWapper(){
checkoutPage()
}




function checkoutPage(){
    root.innerHTML =`

    <div class="mx-8 my-6">
          <div class="flex flex-row justify-between">
              <div class="flex flex-row justify-start items-center pt-20 gap-6">
                    <div class="flex justify-center items-center ">
                      <i class="fa-solid fa-arrow-left text-2xl"></i>
                    </div>
                
                    <div class=" font-bold text-3xl flex justify-center items-center">Check Out</div>
              </div>
              
          </div>
          <h3 class=" text-2xl py-3 pt-5">Shipping Address</h3>
          <!-- Address -->
          <div class=" bg-neutral-500 my-6 flex flex-row justify-around px-4 py-2 rounded-2xl">
                <div>
                  <i class="fa-solid fa-location-dot text-3xl"></i>
                </div>
                <div class="flex flex-col">
                  <h2 class="text-xl font-bold">Home</h2>
                  <p>61480 sunbroke , pc 5679</p>
                </div>
                <div>
                  <i class="fa-solid fa-square-pen text-3xl"></i>
                </div>

          </div>
          <h3 class=" text-2xl py-3 pt-5">Order List</h3>
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


      <div class="mx-4 my-6 border-t-2 border-b-2">
        <h3 class=" text-2xl py-3 pt-5">Choose Shipping</h3>
          <!-- Address -->
          <div class="bg-slate-400 my-6 flex flex-row justify-around px-4 py-2 rounded-2xl">
                <div>
                  <i class="fa-solid fa-truck text-3xl"></i>
                </div>
                <div class="flex gap-3">
                  <h2 class="text-xl font-bold">Choose shipping type</h2>
                </div>
                <div>
                  <i class="fa-solid fa-arrow-right text-3xl"></i>
                </div>

          </div>
      </div>
            
      <div class="mx-4 my-6">
        <h3 class=" text-2xl py-3 pt-5">Promo Code</h3>
        <input class="bg-slate-400" placeholder="Enter Promo Code"></input>

      </div>

    
    </main>
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
    `
}
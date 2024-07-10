import { root } from "../main"



export const MainLayout = (content) => {

    root.innerHTML = `

            ${content}
        <footer>
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


    `
}
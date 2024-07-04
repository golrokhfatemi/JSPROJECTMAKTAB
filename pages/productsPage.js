import { router, routes } from "../main"

export function productsPage(){
     const token = localStorage.getItem("accessToken")??false
     if(token){
          return`
          
     <header class="flex flex-row justify-around">
          <div class="flex justify-start">
               <div class="pt-5 ">
                    <img src="images/image.png">
               </div>
               <div class="pt-5 pl-8 flex flex-col">
                    <div class="flex flex-row">
                         <p>good morning</p>
                         <img src="images/👋.png" class="pl-3">
                    </div>
                         <p class="text-base font-bold">ali ahmadi</p>
               </div>
          </div>
               
          <div>
               <div class="pt-8 flex flex-row gap-4">
                    <img src="images/bell.svg" class="w-6 h-6">
                    <img src="images/heart.svg" class="w-6 h-6">
               </div>
          </div>
               
     </header>


     <main>
          <div class="flex justify-center items-center">
          <input type="text" placeholder="search..." class=" bg-gray-100 p-2 rounded-md w-[356px] m-6">
          </div>
          <div class="flex justify-center mb-4">
          
                    <div class="bg-gray-100 p-2 rounded-md w-[386px] h-[234px]  items-center justify-center flex flex-wrap gap-6 mb-4">
                    
                         <div class="w-[60px] h-[91px] ">
                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                         <image href="images/image 1.png" width=" 60%" height="60%" x="15" y="15">
                         </svg>
                         <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold">Nike</div>
                         </div>

                         <div class="w-[60px] h-[91px] ">
                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                         <image href="images/image adidas1.png" width=" 60%" height="60%" x="15" y="15">
                         </svg>
                         <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold">Adidas</div>
                         </div>

                         <div class="w-[60px] h-[91px] ">
                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                         <image href="images/image puma1.png" width=" 60%" height="60%" x="15" y="15">
                         </svg>
                         <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold">Puma</div>
                         </div>


                         <div class="w-[60px] h-[91px] ">
                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                         <image href="images/image asics1.png" width=" 60%" height="60%" x="15" y="15">
                         </svg>
                         <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold">Asics</div>
                         </div>


                         <div class="w-[60px] h-[91px] ">
                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                         <image href="images/image rebook 1.png" width=" 60%" height="60%" x="15" y="15">
                         </svg>
                         <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold">Rebook</div>
                         </div>


                         <div class="w-[60px] h-[91px] ">
                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                         <image href="images/image newbalence1.png" width=" 60%" height="60%" x="15" y="15">
                         </svg>
                         <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold overflow-hidden">NewB...</div>
                         </div>

                         <div class="w-[60px] h-[91px] ">
                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                         <image href="images/image converse 1.png" width=" 60%" height="60%" x="15" y="15">
                         </svg>
                         <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold">Converse</div>
                         </div>

                         <div class="w-[60px] h-[91px] ">
                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                         <image href="images/image More1.png" width=" 60%" height="60%" x="15" y="15">
                         </svg>
                         <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold">More...</div>
                         </div>

                    </div>
          
          </div>

          <div class="flex justify-around mb-4">
               <div><a href="#"class="font-semibold text-xl text-center">Most Polular</a></div>
               <div><a href="#" class="font-semibold text-base text-center">See All</a></div>
          </div>
          <div>
               <div class="flex mx-5 overflow-x-auto py-3" >
               <div class="  h-[39px]  border-2 border-black mx-2  rounded-3xl px-2.5 py-5 bg-white  text-black  flex justify-center text-center">
                    <a  href="#" class="font-semibold text-base text-center flex justify-center items-center">All</a>
               </div>
               <div class=" inline-block h-[39px]  border-2 border-black mx-2  rounded-3xl px-2.5 py-5 bg-white  text-black  flex justify-center text-center">
                    <a  href="#" class="font-semibold text-base text-center flex justify-center items-center">Nike</a>
               </div>
               <div class=" inline-block h-[39px]  border-2 border-black mx-2  rounded-3xl px-2.5 py-5 bg-white  text-black  flex justify-center text-center">
                    <a  href="#" class="font-semibold text-base text-center flex justify-center items-center">Adidas</a>
               </div>
               <div class=" inline-block h-[39px]  border-2 border-black mx-2  rounded-3xl px-2.5 py-5 bg-white  text-black  flex justify-center text-center">
                    <a  href="#" class="font-semibold text-base text-center flex justify-center items-center">Puma</a>
               </div>
               <div class=" inline-block h-[39px]  border-2 border-black mx-2  rounded-3xl px-2.5 py-5 bg-white  text-black  flex justify-center text-center">
                    <a  href="#" class="font-semibold text-base text-center flex justify-center items-center">Asics</a>
               </div>
               <div class=" inline-block h-[39px]  border-2 border-black mx-2  rounded-3xl px-2.5 py-5 bg-white  text-black  flex justify-center text-center">
                    <a  href="#" class="font-semibold text-base text-center flex justify-center items-center ">Rebook</a>
               </div>
               </div>
          </div>
     <!-- carts -->
          <div class="flex flex-wrap h-[800px] overflow-auto">
               <div class="flex flex-col mx-4 my-3">
                    <div class="bg-[#F3F3F3] w-[182px] h-[182px] rounded-lg flex justify-center items-center">
                    <img src="images/shoe 1.png">
                    </div>
                    <p class="text-xl font-semibold px-2">shoe number 1</p>
                    <p class="text-base font-semibold px-2">price $</p>
               </div>

               <div class="flex flex-col mx-4 my-3">
                    <div class="bg-[#F3F3F3] w-[182px] h-[182px] rounded-lg flex justify-center items-center">
                    <img src="images/shoe 1.png">
                    </div>
                    <p class="text-xl font-semibold px-2">shoe number 1</p>
                    <p class="text-base font-semibold px-2">price $</p>
               </div>

               <div class="flex flex-col mx-4 my-3">
                    <div class="bg-[#F3F3F3] w-[182px] h-[182px] rounded-lg flex justify-center items-center">
                    <img src="images/shoe 1.png">
                    </div>
                    <p class="text-xl font-semibold px-2">shoe number 1</p>
                    <p class="text-base font-semibold px-2">price $</p>
               </div>

               <div class="flex flex-col mx-4 my-3">
                    <div class="bg-[#F3F3F3] w-[182px] h-[182px] rounded-lg flex justify-center items-center">
                    <img src="images/shoe 1.png">
                    </div>
                    <p class="text-xl font-semibold px-2">shoe number 1</p>
                    <p class="text-base font-semibold px-2">price $</p>
               </div>

               <div class="flex flex-col mx-4 my-3">
                    <div class="bg-[#F3F3F3] w-[182px] h-[182px] rounded-lg flex justify-center items-center">
                    <img src="images/shoe 1.png">
                    </div>
                    <p class="text-xl font-semibold px-2">shoe number 1</p>
                    <p class="text-base font-semibold px-2">price $</p>
               </div>

               <div class="flex flex-col mx-4 my-3">
                    <div class="bg-[#F3F3F3] w-[182px] h-[182px] rounded-lg flex justify-center items-center">
                    <img src="images/shoe 1.png">
                    </div>
                    <p class="text-xl font-semibold px-2">shoe number 1</p>
                    <p class="text-base font-semibold px-2">price $</p>
               </div>

               <div class="flex flex-col mx-4 my-3">
                    <div class="bg-[#F3F3F3] w-[182px] h-[182px] rounded-lg flex justify-center items-center">
                    <img src="images/shoe 1.png">
                    </div>
                    <p class="text-xl font-semibold px-2">shoe number 1</p>
                    <p class="text-base font-semibold px-2">price $</p>
               </div>

               <div class="flex flex-col mx-4 my-3">
                    <div class="bg-[#F3F3F3] w-[182px] h-[182px] rounded-lg flex justify-center items-center">
                    <img src="images/shoe 1.png">
                    </div>
                    <p class="text-xl font-semibold px-2">shoe number 1</p>
                    <p class="text-base font-semibold px-2">price $</p>
               </div>
               
          </div>
     </main>


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
    `

     }else{
          router.navigate(routes.login)
     }
   
}
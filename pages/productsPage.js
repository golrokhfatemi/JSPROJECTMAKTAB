import axios from "axios";
import { root, router, routes } from "../main"
import httpServer from "../api";
import { productsBrandWrapper } from "./productsBrand";


export async function productsWrapper(){
     const data = await productsApi();
     console.log(data);
     productsPage(data);
     brandShow();
     categoryBrandShow()
     productInfoDisplay()
     backHome()
     mycart()
     
     
     
}
export function productsPage(products){
    console.log(products);
     const token = localStorage.getItem("accessToken")??false
     if(token){
         root.innerHTML=`
          
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
                         <p class="text-base font-bold">${localStorage.getItem("email")}</p>
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
          
                    <div class=" p-2 rounded-md w-[386px] h-[234px]  items-center justify-center flex flex-wrap gap-6 mb-4">
                    
                         <div class="brand-group w-[60px] h-[91px] ">
                              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                              <image href="images/image 1.png" width=" 60%" height="60%" x="15" y="15">
                              </svg>
                              <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold">Nike</div>
                         </div>

                         <div class=" brand-group w-[60px] h-[91px] ">
                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                         <image href="images/image adidas1.png" width=" 60%" height="60%" x="15" y="15">
                         </svg>
                         <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold">Adidas</div>
                         </div>

                         <div class=" brand-group w-[60px] h-[91px] ">
                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                         <image href="images/image puma1.png" width=" 60%" height="60%" x="15" y="15">
                         </svg>
                         <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold">Puma</div>
                         </div>


                         <div class=" brand-group w-[60px] h-[91px] ">
                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                         <image href="images/image asics1.png" width=" 60%" height="60%" x="15" y="15">
                         </svg>
                         <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold">Asics</div>
                         </div>


                         <div class="brand-group w-[60px] h-[91px] ">
                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                         <image href="images/image rebook 1.png" width=" 60%" height="60%" x="15" y="15">
                         </svg>
                         <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold">Rebook</div>
                         </div>


                         <div class="brand-group w-[60px] h-[91px] ">
                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                         <image href="images/image newbalence1.png" width=" 60%" height="60%" x="15" y="15">
                         </svg>
                         <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold overflow-hidden">NewB...</div>
                         </div>

                         <div class="brand-group w-[60px] h-[91px] ">
                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle id="Ellipse 1" cx="30" cy="30" r="30" fill="#ECECEC"/>
                         <image href="images/image converse 1.png" width=" 60%" height="60%" x="15" y="15">
                         </svg>
                         <div class="w-[60] h-[17]  text-center mt-2 text-sm font-semibold">Converse</div>
                         </div>

                         <div class="brand-group w-[60px] h-[91px] ">
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
               <div class="category-brand inline-block h-[39px]  border-2 border-black mx-2  rounded-3xl px-2.5 py-5 bg-white  text-black  flex justify-center text-center">
                    <a  href="#" class="font-semibold text-base text-center flex justify-center items-center">Nike</a>
               </div>
               <div class="category-brand  inline-block h-[39px]  border-2 border-black mx-2  rounded-3xl px-2.5 py-5 bg-white  text-black  flex justify-center text-center">
                    <a  href="#" class="font-semibold text-base text-center flex justify-center items-center">Adidas</a>
               </div>
               <div class="category-brand  inline-block h-[39px]  border-2 border-black mx-2  rounded-3xl px-2.5 py-5 bg-white  text-black  flex justify-center text-center">
                    <a  href="#" class="font-semibold text-base text-center flex justify-center items-center">Puma</a>
               </div>
               <div class="category-brand  inline-block h-[39px]  border-2 border-black mx-2  rounded-3xl px-2.5 py-5 bg-white  text-black  flex justify-center text-center">
                    <a  href="#" class="font-semibold text-base text-center flex justify-center items-center">Asics</a>
               </div>
               <div class="category-brand  inline-block h-[39px]  border-2 border-black mx-2  rounded-3xl px-2.5 py-5 bg-white  text-black  flex justify-center text-center">
                    <a  href="#" class="font-semibold text-base text-center flex justify-center items-center ">Rebook</a>
               </div>
               </div>
          </div>
     <!-- carts -->
          <div class="flex flex-wrap h-[800px] overflow-auto ">
               ${products.map(product => `<div id="${product.id}" class="flex flex-col mx-4 my-3 w-[182px] info">
                    <div class="bg-[#F3F3F3] w-[182px] h-[182px] rounded-lg flex justify-center items-center">
                    <img src=${product.imageURL}>
                    </div>
                    <p class="text-xl font-semibold px-2 whitespace-nowrap overflow-hidden text-ellipsis w-full">${product.name}</p>
                    <p class="text-base font-semibold px-2">${product.price} $</p>
               </div>`).join("")}

               
               
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

     }else{
          router.navigate(routes.login)
     }
   
}

function brandShow(){
     
    const brands = document.querySelectorAll(".brand-group")
     brands.forEach((item) => item.addEventListener("click" ,()=>{
          const brandName = item.querySelector("div").innerHTML;
          console.log(brandName);
          router.navigate(`/productsbrand/${brandName}`)
     }))
    

}

async function productsApi(sort=""){
     const response = await httpServer.get(`/products${sort}`)
     console.log(response);
     console.log(response.data);
     productsPage(response.data);
     brandShow();
     categoryBrandShow()
     return response.data
}

function categoryBrandShow(){
     
     const brands = document.querySelectorAll(".category-brand")
     
     brands.forEach((item) => {item.addEventListener("click" , () => {
          const brandName = item.querySelector("a").innerHTML;
          const sort= `?brand=`+brandName.toUpperCase()
          console.log(sort);
          productsApi(sort)
     })
     }
      )
    
}


function productInfoDisplay(){
     const info= document.querySelectorAll(".info")
     info.forEach((item,index) => item.addEventListener("click" ,(e)=>{
          const id =info[index].id
          // console.log(id);
          router.navigate(`/productinfo/${id}`)
          

     }))

}

function backHome(){
const backhome = document.getElementById("home")
backhome.addEventListener("click" , () => {
     router.navigate("/products")
})
}

function mycart(){
     const myCart = document.getElementById("mycart")
     myCart.addEventListener("click" , ()=> {
          router.navigate("/mycart")
     })
}


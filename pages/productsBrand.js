
import httpServer from "../api";
import { root, router, routes } from "../main";


export async function productsBrandWrapper(match){
    const data = await productsBrandApi(match.data.id)
    console.log(data);
    productsBrandPage(data)
    console.log(match.data.id);
}

function productsBrandPage(products){
    root.innerHTML=`
    <div>
            <div class=" h-12 mb-5 flex flex-row items-center px-4 ">
                <button id="button-back">
                    <i class="fa-solid fa-arrow-left text-2xl"></i>
                </button>
                <div class="font-semibold text-2xl pl-4"></div>
              
            </div>
            
            <div>
                <div class="flex flex-wrap h-[800px] overflow-auto ">
                    ${products.map(product => `
                        <div class="flex flex-col mx-4 my-3 w-[182px]">
                            <div class="bg-[#F3F3F3] w-[182px] h-[182px] rounded-lg flex justify-center items-center">
                                <img src=${product.imageURL}>
                            </div>
                            <p class="text-xl font-semibold px-2 whitespace-nowrap overflow-hidden text-ellipsis w-full">${product.name}</p>
                            <p class="text-base font-semibold px-2">${product.price} $</p>
                        </div>`).join("")}
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
    
    </div>

    `
    document.querySelector("#button-back").addEventListener("click" ,() => router.navigate(routes.products) )
}

async function productsBrandApi(brand){
    const brandUpper = brand.toUpperCase()
    const response = await httpServer.get(`/products?brand=${brandUpper}`)
    return response.data
}
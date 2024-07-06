
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
            <div class="bg-slate-500 h-12 mb-5 flex flex-row items-center">
                <button id="button-back">
                    <img src="images/arrow-left-short.png">
                </button>
                <div class="font-semibold text-2xl pl-4">NIKE</div>
              
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
    
    </div>

    `
    document.querySelector("#button-back").addEventListener("click" ,() => router.navigate(routes.products) )
}

async function productsBrandApi(brand){
    const brandUpper = brand.toUpperCase()
    const response = await httpServer.get(`/products?brand=${brandUpper}`)
    return response.data
}
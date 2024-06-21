export function productsPage(){
return`
<h2 class="font-serif  text-emerald-800 p-4 text-center font-bold text-2xl">Products Page</h2>
<ul class="p-6 font-serif ">
<li><a href="/product/1" data-navigo>product 1 </a></li>
<li><a href="/product/2" data-navigo>product 2 </a></li>
<li><a href="/product/3" data-navigo>product 3 </a></li>
</ul>

`
}

async function getData(){
    try{
        const response = await fetch(`https://fakestoreapi.com/products`)
        const data = await response.json()
        console.log(response);
        console.log(data);
        renderData(data)
        
    }catch(e){
        console.log(e);
    }
    
}

const dataDiv = document.getElementById("data")
function renderData(products){
    products.forEach((product) => {
    const productDiv = document.createElement("div")
    
    productDiv.innerHTML =`
    <div class="bg-gray-500 w-1/5  flex flex-wrap gap-5">
   
    <p>${product.description}</P>
    <p class="font-bold">${product.price}$</P>
    <img src="${product.image} class="w-32 h-32">
   
    </div>
    `
    dataDiv.append(productDiv);
});
}
 
getData()
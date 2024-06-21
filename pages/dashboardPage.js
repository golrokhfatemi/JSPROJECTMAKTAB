import { router, routes } from "../main";

export function dashboardPage(){
    const token = localStorage.getItem("access token") ?? false;
    if(token){
        return`<h2 class="font-serif  text-emerald-800 p-4 text-center font-bold text-2xl">Dashboard Page</h2>
        <div class="text-center flex justify-center">
        <button id="logout" class="font-serif border-solid text-white border-2 cursor-pointer bg-teal-800 border-slate-400  px-4 py-1 mb-2 rounded-md font-semibold ">logout</button> 
        </div>
        `
    }else{
        router.navigate(routes.login)
    }
    
}

export const logout = () =>{
document.getElementById("logout")?.addEventListener("click" , () => {
    
    localStorage.clear();
    router.navigate(routes.home);
})
}
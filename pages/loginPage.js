
import axios from "../api";
import { router, routes } from "../main";


export function loginPage() {
  return `
    <div class="w-full flex flex-col">
      <form class="flex items-center justify-around flex-col h-screen">
        <div class="flex flex-col items-center">
          <div class="mt-[132px]">
            <img src="images/logo2.png" />
          </div>
          <div
            class="w-[342px] h-[39px] mt-[118px] items-center flex justify-center"
          >
            <h3 class="font-semibold text-3xl">Login To Your Account</h3>
          </div>
        </div>
        <div class="flex items-center justify-center flex-col gap-3">
          <div class="flex flex-row relative">
            <i class="fa-solid fa-envelope absolute top-3 pr-3"></i>
            <input
              id="email"
              type="email"
              class="bg-gray-100 w-[380px] h-10 rounded-lg pl-7"
              placeholder="Email"
            />
          </div>

          <div class="flex flex-row relative">
            <i class="fa-solid fa-lock absolute top-3"></i>
            <input id="password" type="password" class="bg-gray-100 w-[380px] h-10 rounded-lg pl-7" placeholder="Password"/>
            <i class="fa-regular fa-eye absolute cursor-pointer top-3 right-3" id="eye" ></i>
          </div>
            
                <div class="flex items-center justify-center gap-3 ">
                    <input type="checkbox" />
                    <label> Remember Me</label>
                    
                </div>
                 <div class="flex justify-center items-center ">
                    <button class="px-5 py-2 inline-block rounded-full border border-zinc-300 " >register</button>
                </div>
        </div>

        <div class=" gap-5 flex flex-col ">
       
          <input type="submit" class="rouded-[30px] py-4 rounded-full bg-gray-400 w-[380px] hover:bg-slate-900 hover:text-white"/>
        </div>
      </form>
    </div>

    `;
}

export const login = () => {
  document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const credentials = {
      email: e.target["email"].value,
      password: e.target["password"].value,
    };
    try {
      const response = await axios.post(`/login`, credentials);
      console.log(response);
      if (response.status === 200) {
       
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("email", response.data.user.email);

       router.navigate(routes.products)
        
      }
    } catch (e) {
      console.log(e);
     
    }
  });
};

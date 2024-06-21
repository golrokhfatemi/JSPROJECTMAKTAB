import axios from "../api";
import { router, routes } from "../main";


export function loginPage(){
    
    return`
    <h2 class="font-serif  text-emerald-800 p-4 text-center font-bold text-2xl">Login Page</h2>
    <div class="flex justify-center content-center mt-44">
      <div class=" flex justify-center border-solid border-2 flex-col content-center items-center bg-teal-800 w-1/3 rounded-3xl">
        <form> 
              <lable class="font-serif p-2 text-white">Email</lable><br>
              <input type="email" id="email" class="font-serif border-solid border-slate-400  rounded-md py-1 px-3 m-3"><br>
              <lable class="font-serif p-2 text-white" >Password</lable><br>
              <input type="password" id="password" class="font-serif border-solid border-slate-400  rounded-md py-1 px-3 m-3"><br>
              <div class="flex justify-center">
                <input type="submit" value="login" class="font-serif border-solid text-white border-2 cursor-pointer border-slate-400  px-4 py-1 mb-2 rounded-md font-semibold">
              </div>
              <span id="error" style="color:red"></span>
        </form>
      </div>
    </div>

    `
}

export const login = () =>{
    document.querySelector("form").addEventListener("submit" , async(e) =>{
        e.preventDefault();
        const credentials={
            email : e.target["email"].value ,
            password : e.target["password"].value
        }
        try{
            const response = await axios.post('/login' , credentials)
            if(response.status === 200){
                const {data} = response
                localStorage.setItem("access token" , data.accessToken)
                localStorage.setItem("email " , data.user.email)
                router.navigate(routes.products)
            }
            

        }catch(e){
            console.log(e);
            document.getElementById("error").innerHTML = e.response.data

        }
      
    })
}
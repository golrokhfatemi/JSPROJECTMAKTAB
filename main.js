import Navigo from 'navigo';
import './style.css'
import './index.css'


import { login, loginPage } from './pages/loginPage';
import { boardingPage} from './pages/boardingPage';
import { register, registerPage } from './pages/registerPage';
import { productsPage, productsWrapper } from './pages/productsPage';
import { productsBrandWrapper } from './pages/productsBrand';



export const router = new Navigo ('/');
export const root =document.querySelector("#app")

function renderFullPage(children ,creatEventListener){
  if(children){
    document.querySelector("#app").innerHTML = `<div>${children}</div>`;
    if(creatEventListener){
      creatEventListener()
    }
  } 
}

export const routes ={
  boarding :'/',
  products :'/products',
  login :'/login',
  register : '/register',
  productsbrand :'/productsbrand/:id',
  productinfo :'/productinfo'
}

  router
  
        .on(routes.boarding,() => renderFullPage(boardingPage()))
        .on(routes.products ,productsWrapper)
        .on(routes.productsbrand ,(match) => productsBrandWrapper(match))
        
        .on(routes.login ,() => renderFullPage(loginPage(), login))
        .on(routes.register , () =>renderFullPage(registerPage(), register))
        .resolve()



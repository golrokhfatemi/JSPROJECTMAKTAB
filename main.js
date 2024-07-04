import Navigo from 'navigo';
import './style.css'
import './index.css'


import { login, loginPage } from './pages/loginPage';
import { boardingPage} from './pages/boardingPage';
import { register, registerPage } from './pages/registerPage';
import { productsPage } from './pages/productsPage';



export const router = new Navigo ('/');

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
  // home : '/home',
  products :'/products',
  // productDetails:'/product/:id',
  login :'/login',
  // signup :'/signup',
  register : '/register'
}

  router
  
        .on(routes.boarding,() => renderFullPage(boardingPage()))
        .on(routes.products ,() => renderFullPage(productsPage()))
        // .on(routes.products ,() => render(productsPage()))
        // .on(routes.productDetails ,(match) => render(productDetailsPage(match)))
        .on(routes.login ,() => renderFullPage(loginPage(), login))
        .on(routes.register , () =>renderFullPage(registerPage(), register))
        .resolve()



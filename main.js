import Navigo from 'navigo';
import './style.css'
import './index.css'

import { homePage } from './pages/homePage';

import { productsPage } from './pages/productsPage';

import { login, loginPage } from './pages/loginPage';
import { productDetailsPage } from './pages/productDetailsPage';
import { signup, signupPage } from './pages/signupPage';
import { boardingPage} from './pages/boardingPage';
import { register, registerPage } from './pages/registerPage';



export const router = new Navigo ('/');

// function render(){
    
// document.querySelector("#app").innerHTML =``

// }

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
  home : '/home',
  products :'/products',
  productDetails:'/product/:id',
  login :'/login',
  signup :'/signup',
  register : '/register'
}

  router
  
        .on(routes.boarding,() => renderFullPage(boardingPage()))
        .on(routes.home ,() => renderFullPage(homePage()))
        // .on(routes.products ,() => render(productsPage()))
        // .on(routes.productDetails ,(match) => render(productDetailsPage(match)))
        .on(routes.login ,() => renderFullPage(loginPage(), login))
        .on(routes.register , () =>renderFullPage(registerPage(), register))
        .resolve()



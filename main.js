import Navigo from 'navigo';
import './style.css'
import './index.css'


import { login, loginPage } from './pages/loginPage';
import { boardingPage} from './pages/boardingPage';
import { register, registerPage } from './pages/registerPage';
import { productsPage, productsWrapper } from './pages/productsPage';
import { productsBrandWrapper } from './pages/productsBrand';
import { productInfoPageWrapper } from './pages/productInfoPage';
import { mycartPageWrapper } from './pages/mycartPage';
import { checkoutWapper } from './pages/checkoutPage';



export const router = new Navigo ('/');
export const root =document.querySelector("#app")

function render(children ,creatEventListener){
  if(children){
    document.querySelector("#app").innerHTML = `<div>${children}</div>`;
    if(creatEventListener){
      creatEventListener()
    }
  } 
}

function checkAuth(next){
  if(localStorage.getItem("accessToken")){
    next()
  }else{
    router.navigate('/login')
  }
  }

function checkProtectedRout(){
  if(!localStorage.getItem("accessToken")){
    next()
  }else{
    router.navigate('/')
  }
}


export const routes ={
  boarding :'/',
  products :'/products',
  login :'/login',
  register : '/register',
  productsbrand :'/productsbrand/:id',
  productinfo :'/productinfo/:id',
  mycart :'/mycart',
  checkout: '/checkout'
  
}

  router
  
        .on(routes.boarding,() => render(boardingPage()))
        .on(routes.products ,productsWrapper)
        .on(routes.productsbrand ,(match) => productsBrandWrapper(match))
        .on(routes.productinfo ,(match) => productInfoPageWrapper(match) )
        .on(routes.mycart , mycartPageWrapper)
        .on(routes.checkout , checkoutWapper)
        .on(routes.login ,() => render(loginPage(), login))
        .on(routes.register , () =>render(registerPage(), register))
        .resolve()



import Navigo from 'navigo';
import './style.css'
import './index.css'
import { aboutPage } from './pages/aboutPage';
import { homePage } from './pages/homePage';
import { contactPage } from './pages/contactPage';
import { productsPage } from './pages/productsPage';
import { dashboardPage, logout } from './pages/dashboardPage';
import { login, loginPage } from './pages/loginPage';
import { productDetailsPage } from './pages/productDetailsPage';
import { signup, signupPage } from './pages/signupPage';



export const router = new Navigo ('/');

function render(children){
document.querySelector("#app").innerHTML = `
<nav class="font-serif  text-emerald-800 p-4 text-center font-bold text-md">
      <menu>
        <li><a href="/" data-navigo>Home</a></li>
        <li><a href="/products" data-navigo>Products</a></li>
        <li><a href="/about" data-navigo>About Us</a></li>
        <li><a href="/contact" data-navigo>Contact US</a></li>
        <li><a href="/dashboard" data-navigo>Dashboard</a></li>
        <li><a href="/signup" data-navigo>Sign Up</a></li>
      </menu>
    </nav>
<div>${children}</div> `
}

function renderFullPage(children ,creatEventListener){
  document.querySelector("#app").innerHTML = `<div>${children}</div>`;
  if(creatEventListener){
    creatEventListener()
  }
  ;
}

export const routes ={
  home : '/',
  about : '/about' ,
  contact :'/contact' ,
  products :'/products',
  productDetails:'/product/:id',
  dashboard :'/dashboard',
  login :'/login',
  signup :'/signup',
}

  router.on(routes.home ,() => render(homePage()))
        .on(routes.about ,() => render(aboutPage()))
        .on(routes.contact ,() => render(contactPage()))
        .on(routes.products ,() => render(productsPage()))
        .on(routes.productDetails ,(match) => render(productDetailsPage(match)))
        .on(routes.dashboard ,() => renderFullPage(dashboardPage(), logout))
        .on(routes.login ,() => renderFullPage(loginPage(), login))
        .on(routes.signup ,() => renderFullPage(signupPage(),signup))
        .resolve()



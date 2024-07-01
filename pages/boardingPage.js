import { router, routes } from "../main";

export function boardingPage() {
  showLogo();
  setTimeout( primerImage , 2000);
  setTimeout(showSlider , 4000)
  
}

  function showLogo() {
    
    const logoElement = document.createElement("div");
    logoElement.classList.add("h-screen")
    logoElement.id = "logo1";
    logoElement.innerHTML =`
            <div class="flex items-center justify-center h-screen gap-3">
                <img src="./images/logo2.png">
                <span class="text-6xl font-bold not-italic">shoes</span>
                <div class="loader"></div>
            </div>
    `
    logoElement.style.display = "block";
    const appElement = document.getElementById('app');
    
    appElement.appendChild(logoElement);
    
    // if (appElement) {
     
     
    // } else {
    //   console.log('App element not found');
    // }
    // return logoElement
  }
    

    

      function  primerImage(){
        const logoElement = document.getElementById("logo1");
        if (logoElement) {
          logoElement.style.display = "none";
        }

      const descDiv =document.createElement("div");
      descDiv.id = "descId"
      
      const newDivElement = document.createElement("div");
      newDivElement.id = "newDiv";
      newDivElement.classList.add('fixed', 'inset-0','bg-black')

      newDivElement.style.backgroundImage = "url('images/WallpaperDog-20534610 1.png')";
      newDivElement.style.backgroundSize ='cover'
      newDivElement.style.backgroundPosition ='center'
      // newDivElement.style.opacity = '0.7';

      const overlayDiv = document.createElement('div');
      overlayDiv.classList.add('absolute', 'bottom-0', 'left-0', 'w-full', 'h-1/3', 'bg-black', 'bg-opacity-50' , 'transition', 'duration-300', 'ease-in-out');
      newDivElement.appendChild(overlayDiv);
      

     const innerDiv = document.createElement("div");
     innerDiv.classList.add('absolute', 'bottom-10', 'left-0', 'p-4')
      
      const welcomeHead = document.createElement("h4");
      welcomeHead.classList.add("text-2xl" , "text-white" ,"font-bold")
      welcomeHead.innerHTML ="welcome to "

      const welcomName = document.createElement("h2");
      welcomName.classList.add("text-4xl" , "text-white" ,"font-bold")
      welcomName.innerHTML ="shoe "

      const welcomText = document.createElement("p");
      welcomText.innerHTML ="The best sneakers & shoes e-commerse app of the century for your fashion needs!"
      welcomText.classList.add("text-1xl" , "text-white" )

      const btnDiv = document.createElement("div")
      

      // const startBtn = document.createElement("button")
      // startBtn.id="startBtn"
      // startBtn.textContent ="Get start"
      // startBtn.classList.add("text-white" ,"border" ,"rounded" ,"px-4")
      
      

      document.getElementById("app").appendChild(descDiv)
      descDiv.append(newDivElement)
      newDivElement.appendChild(innerDiv)
      innerDiv.appendChild(welcomeHead)
      innerDiv.appendChild(welcomName)
      innerDiv.appendChild(welcomText)
      innerDiv.appendChild(btnDiv)
      // btnDiv.appendChild(startBtn)
    
      newDivElement.style.display = "block";

      }
      

      function showSlider() {
        const newDivElement = document.getElementById("descId");
        if (newDivElement) {
          newDivElement.style.display = "none";
        }
        
        const sliderContainer = document.createElement("div");
        sliderContainer.id = "sliderContainer";
        sliderContainer.classList.add('fixed', 'inset-0');
      
        const slides = [
          {
            imageUrl: "images/WallpaperDog-20534715 1.png",
            text: "We provide high quality products just for you",
          },
          {
            imageUrl: "images/wallpaperDog-20397673 1.png",
            text: "Join us and enjoy amazing discounts and offers.",
          },
          {
            imageUrl: "images/WallpaperDog-20534536 1.png",
            text: "Explore our wide range of products.",
          }
        ];
      
        slides.forEach((slide, index) => {
          const slideElement = document.createElement("div");
          slideElement.classList.add('slide', 'absolute', 'inset-0', 'bg-cover', 'bg-center');
          slideElement.style.backgroundImage = `url(${slides.imageUrl})`;
          slideElement.style.display = index === 0 ? "block" : "none";

          const imgElement = document.createElement('img');
          imgElement.src = slide.imageUrl;
          imgElement.alt = "Slide Image";
          imgElement.classList.add('w-full', 'h-2/3');
          slideElement.appendChild(imgElement);
      
          const innerDiv = document.createElement("div");
          innerDiv.classList.add('absolute', 'p-4' ,'flex' ,"justify-center" ,"flex-col" , "gap-36" ,"flex" ,"items-center");
          innerDiv.style.color = 'black';
      
          const welcomText = document.createElement("p");
          welcomText.innerHTML = slide.text;
          welcomText.classList.add("text-3xl" ,"font-semibold" ,"text-center");
      
      
          const btnDiv = document.createElement("div");
          btnDiv.classList.add("buttom-0")
          const nextBtn = document.createElement("button");
          nextBtn.classList.add( "t-[847px]" ,"rouded-[30px]", "py-3" , "rounded-full", "bg-gray-400" , "w-[380px]" , "hover:bg-slate-900", "hover:text-white" ,"justify-center" ,"flex" ,)

          nextBtn.textContent = index === slides.length - 1 ? "Get Started" : "Next";
          nextBtn.classList.add("text-black", "border", "rounded", "px-4","flex" ,"justify-center");
          nextBtn.addEventListener("click", () => showNextSlide(index));
      
         
          innerDiv.appendChild(welcomText);
          btnDiv.appendChild(nextBtn);
          innerDiv.appendChild(btnDiv);
          slideElement.appendChild(innerDiv);
          sliderContainer.appendChild(slideElement);
        });
      
        document.body.appendChild(sliderContainer);
        let currentSlide = 0;
      
        function showNextSlide(index) {
          const slides = document.querySelectorAll(".slide");
          slides[index].style.display = "none";
          if (index < slides.length - 1) {
            slides[index + 1].style.display = "block";
          } else {
            sliderContainer.style.display = "none";
            router.navigate(routes.register);
          }
        }
      }




      // getStarted()

  
    
    // const newImageElement = document.createElement("div");
    // setTimeout(() => {
    //     newImageElement.style.display = "none";
    //     const newSlideElement = document.createElement("img");
    //     newSlideElement.id = "newImage";
    //     newSlideElement.setAttribute("src", "images/WallpaperDog-20534715 1.png");
    //     newSlideElement.style.display = "block";
    //     document.body.appendChild(newSlideElement);
    //   }, 5000);

  

 


// export const getStarted = () => {
//   console.log(document.querySelector("#startBtn"));
//   document.querySelector("#startBtn").addEventListener("click" ,() => {
//   router.navigate(routes.login)
// })
// }



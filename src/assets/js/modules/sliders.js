import Swiper from './swiper-bundle.js';


  const hasBlock = (selector) => {
      return document.querySelector(selector) == null
    }

    if(!hasBlock('.reviews__slider')){
      const newProd = new Swiper(".reviews__slider",{
        slidesPerView:3,
        spaceBetween:85.33,
          breakpoints: {
            1681: {
            spaceBetween:85.33,
            },
            1440: {
            spaceBetween:64
            },
            992: {
            spaceBetween:32
            },
            768: {
            spaceBetween:8,
            slidesPerView:3
            },
            641: {
            spaceBetween:8,
            slidesPerView:2.3
            },
            577: {
            spaceBetween:8,
            slidesPerView:2
            },
            0: {
            spaceBetween:8,
            slidesPerView:1.1
            },
            
          },
      
      })
    }  

    if(!hasBlock('.media__slider')){
      const newProd = new Swiper(".media__slider",{
        slidesPerView:3,
        spaceBetween:16,
        slidesPerColumn:2,        
        slidesPerColumnFill:'row',
        breakpoints:{
          768:{
            slidesPerView:3,
            slidesPerColumn:2, 
          },
          575:{
            slidesPerView:2,
            slidesPerColumn:2, 
          },
          0:{
            slidesPerView:1.1,
            slidesPerColumn:2, 
          },
        }
        
      })
    }
    
    window.navInit = function(){
      const map_list = new Swiper(".map__list",{
        slidesPerView:'auto',          
      })
    }
  
    
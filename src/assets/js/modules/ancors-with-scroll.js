document.oninput = function() {
    const input = document.querySelector('.phone-mask');
    input.value = input.value.replace (/[^\+\d]/g, '');
}

const anchors = document.querySelectorAll('a.js-ancor')
const mobileAnchors = document.querySelectorAll('a.js-mobile-ancor')
const menuMobile = document.querySelector('.hollidays__menu-mobile')
const toggler = document.querySelector('.hollidays__toggler')
const btnFixed = document.querySelector('.btn-fixed')

toggler.addEventListener('click',(e)=>{
  e.currentTarget.classList.toggle('active')
  menuMobile.classList.toggle('active')
  document.body.classList.toggle('scroll-hidden')
  if(menuMobile.classList.contains('active')){
    $(btnFixed).addClass('scrolled')
  }else{
    if($(document).scrollTop()<=1){
      $(btnFixed).removeClass('scrolled')
    }
  }
})

const ancorHandler = (collections) => {
  for (let anchor of collections) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.body.classList.remove('scroll-hidden')
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    if(menuMobile.classList.contains('active')){
      menuMobile.classList.remove('active')
    }
    if(toggler.classList.contains('active')){
      toggler.classList.remove('active')
    }
  })
}
}

ancorHandler(anchors)
ancorHandler(mobileAnchors)

const sections = document.querySelectorAll('.js-section')


let position = 0
$(document).on('scroll',function(){
let current = $(this).scrollTop()
  sections.forEach((el,i)=>{
      if(el.offsetTop - (parseInt($(el).css('paddingTop'))+ 40) <= window.scrollY){
        anchors.forEach(el=>{
          if(el.classList.contains('active')){              
            el.classList.remove('active')            
          }
          anchors[i].classList.add('active')
        })
        mobileAnchors.forEach(el=>{
          if(el.classList.contains('active')){              
            el.classList.remove('active')            
          }
          mobileAnchors[i].classList.add('active')
        })
      }
    })

    if(current > position && current > $('.hollidays__header').innerHeight()){        
        $('.hollidays__header').css({'opacity':'0','zIntex':'-1', 'visibility':'hidden'})
        
    }else{
        $('.hollidays__header').addClass('scrolled')
        $('.hollidays__header').removeAttr('style')
        
    }
    if(current==0){
        $('.hollidays__header').removeClass('scrolled')
    }

    if(current>1){
      $(btnFixed).addClass('scrolled')
    }else{
      $(btnFixed).removeClass('scrolled')
    }

    position = current;
  
})

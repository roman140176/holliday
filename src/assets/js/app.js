
import './modules/fancy'
import './modules/inputmask'
import './modules/sliders'
import './modules/faq'
import './modules/ancors-with-scroll'
import './modules/observers'
import './modules/advanseds'
import './modules/cards'

document.oninput = function() {
    const input = document.querySelector('.phone-mask');
    input.value = input.value.replace (/[^\+\d]/g, '');
}

const btns = document.querySelectorAll('.btn')

btns.forEach(item=>{
  item.addEventListener('mouseleave',(e)=>{
     e.currentTarget.classList.add('unhover')
     $(e.currentTarget)
  })
  item.addEventListener('mouseenter',(e)=>{
    e.currentTarget.classList.remove('unhover')
    
  })
})






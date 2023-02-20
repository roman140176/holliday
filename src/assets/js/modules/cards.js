const cards = document.querySelectorAll('.card')

for(let i=0;i<cards.length;i++){
  const card = cards[i]
  card.addEventListener('mousemove',rotate)
  card.addEventListener('mouseleave',function(){
    card.querySelector('.card-item').removeAttribute('style')
  })
}

function rotate(event,eq=20){
  const cardItem = this.querySelector('.card-item')
  const halfHeight = cardItem.offsetHeight / 2

  cardItem.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / eq + 'deg) rotateY(' + (event.offsetY - halfHeight) / eq +'deg)'
  
}

document.querySelectorAll('.reviews__video').forEach(item=>{
  item.addEventListener('click',(e)=>{
    e.currentTarget.querySelector('.play-link').click()
  })
})
$('.faq__header').on('click',(e) => {
const el = $(e.currentTarget)
el.next().slideToggle('fast')
el.toggleClass('active')
})
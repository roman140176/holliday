import './gsap/gsap'
import './gsap/scrollTrigger'
  
  const horizontalSections = gsap.utils.toArray('section.horizontal')

    horizontalSections.forEach(function (sec, i) {     
      
      let thisPinWrap = sec.querySelector('.pin-wrap');
      let thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

    
      
      let getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth / 1.1);      
      gsap.fromTo(thisAnimWrap, {
        x: () => 0,
      }, {
        x: () => getToValue(),
        ease: "none",
        scrollTrigger: {
          trigger: sec,
          start: "top 32px",
          end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth / 1.1),
          pin: thisPinWrap,
          invalidateOnRefresh: true,
          //anticipatePin: 1,
          scrub: true,
          onEnter:()=>{$('.hollidays__sliderbox').css('backgroundColor','transparent');$('.obs-item').css('backgroundColor','#fff')},
          onLeave:()=>{$('.hollidays__sliderbox,.obs-item').removeAttr('style')},
          onLeaveBack:()=>{$('.hollidays__sliderbox,.obs-item').removeAttr('style')},
          onEnterBack:()=>{$('.hollidays__sliderbox').css('backgroundColor','transparent');$('.obs-item').css('backgroundColor','#fff')},
        }
      });    

    });	


      
      const videoItem = document.querySelectorAll('.obs-item')
      const vItScroll = (v) => {
      const p = parseInt($(v).css('padding'))      
      const video = v.querySelector('.animation-wrap__video ');
      const header = v.querySelector('.animation-wrap__header');
      const getToValueVideoItem = () => (v.offsetWidth - video.offsetWidth) - p*2
      gsap.fromTo(header, {
        x: () => 0
      }, {
        x: () => getToValueVideoItem(),
        ease: "none",
        scrollTrigger: {
          trigger: video,
          start: "top 0",
          end: () => "+=" + v.offsetWidth / 2,
          // pin: thisPinWrap,
          invalidateOnRefresh: true,
          //anticipatePin: 1,
          scrub: true,         
        }
      });
      }
      

let vItoptions = {
  root: null,
  rootMargin: '0px',
  threshold:1
}
      
let callback = (entries, vItobserver) => {
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      vItScroll(entry.target)
    }
    
  });
}
let vItobserver = new IntersectionObserver(callback, vItoptions);

videoItem.forEach(vt => {
  vItobserver.observe(vt);
});


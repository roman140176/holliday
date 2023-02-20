 let options = {
  root: null,
  rootMargin: '0px',
  threshold: [1,0.8]
}
 let imgOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1
}

let callback = (entries, observer) => {
  entries.forEach(entry => {
        
    if (entry.isIntersecting) {
        entry.target.play();
    }
    else {
        entry.target.pause();
    }
    

  });
}
let imageCallback = (entries, observer) => {
  entries.forEach(entry => {
        
    if (entry.isIntersecting) {
        entry.target.classList.add('unrotate')
    }
    else {
        entry.target.classList.remove('unrotate')
    }
    

  });
}

let fadeText = (et, observer) => {
  et.forEach(entry => {
        
    if (entry.isIntersecting) {
        $(entry.target).addClass('visible')
    }
    else {
        $(entry.target).removeClass('visible')
    }   

  });
}

let observer = new IntersectionObserver(callback, options);
let imageObserver = new IntersectionObserver(imageCallback, imgOptions);

let textObserver = new IntersectionObserver(fadeText, options);

const videos = document.querySelectorAll(".obs-video");

const texts = document.querySelectorAll(".scroll-fade");

const rotateImages = document.querySelectorAll(".main_image");

videos.forEach(video => {
  observer.observe(video);
});
texts.forEach(t => {
  textObserver.observe(t);
});
rotateImages.forEach(t => {
  imageObserver.observe(t);
});
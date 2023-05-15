
// right and center NAV BAR //////////
const content = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');
const textLoop = document.querySelectorAll('nav .container ul');
const navText = document.querySelectorAll('nav .container ul span');


window.addEventListener('scroll', ()=> {
    let current = '';

    content.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 6)) {
            current = section.getAttribute('id');
            return;
        }
    })
    navLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)) {
            li.classList.add('active');

        } 
    }) 
})

// window.addEventListener('wheel', ()=> {
//   let current = '';

//   content.forEach( section => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;

//       if (pageYOffset >= (sectionTop - sectionHeight / 6)) {
//           current = section.getAttribute('id');
//       }
//   })
//   navLi.forEach( li => {
//       li.classList.remove('active');
//       if(li.classList.contains(current)) {
//           li.classList.add('active');

//       } 
//   }) 
// })


// nav .container ul li .nav-menu-item

// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');
// const idlePeriod = 100;
// const animationDuration = 400;

// let lastAnimation = 0;
// let index = 0;


// prev.addEventListener('click', () => {
//     // console.log("clicked");
//   if (index < 1) return;
//   index--;
  
//   content.forEach((section, i) => {
//     if (i === index) {
//       section.scrollIntoView({behavior: "smooth"});
//     }
//   });
// })

// next.addEventListener('click', () => {
//   if (index > 3) return;
//   index++;
//   content.forEach((section, i) => {
//     if (i === index) {
//       section.scrollIntoView({behavior: "smooth"});
//     }
//   })
// })

// document.addEventListener('scrol', event => {
//   var delta = event.wheelDelta;
//   var timeNow = new Date().getTime();
//   // Cancel scroll if currently animating or within quiet period
//   if(timeNow - lastAnimation < idlePeriod + animationDuration) {
//     event.preventDefault();
//     return;
//   }
  
//   if (delta < 0) {
//     var event = new Event('click');
//     next.dispatchEvent(event);
//   } else {
//     var event = new Event('click');
//     prev.dispatchEvent(event);
//   }
  
//   lastAnimation = timeNow;
// }) 



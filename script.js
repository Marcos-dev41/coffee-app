const links = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenBtn = document.querySelector("#menu-open-button");
const menuCloseBtn = document.querySelector("#menu-close-button");

menuOpenBtn.addEventListener("click",() => {
    //toggle mobile menu visibility   
document.body.classList.toggle("show-mobile-menu");
})
// close menu
menuCloseBtn.addEventListener("click",() => menuOpenBtn.click())


links.forEach(link => {
    link.addEventListener("click",() => menuOpenBtn.click());
})

//   swiper initialiser
const swiper = new Swiper('.slider-wrapper', {
   
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });

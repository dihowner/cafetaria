
const openIcon = document.querySelector(".toggle__icon");

const closeIcon = document.querySelector(".close__icon");

const sidebar = document.querySelector(".navigation");


openIcon?.addEventListener("click", ()=> {
	sidebar?.classList?.add("open")
})

closeIcon?.addEventListener("click", ()=> {
	sidebar?.classList?.remove("open")
})

var swiper = new Swiper(".mySwiper", {
	loop:true,
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
     },
	pagination: {
        el: ".swiper-pagination",
        clickable: true,
     }
});

 var swiper1 = new Swiper(".mySwiperOne", {
   	slidesPerView:3,
      spaceBetween: 20,
      freeMode: true,
      breakpoints: {
          480: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
           1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          }
		 }
    });
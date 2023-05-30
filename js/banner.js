var swiper = new Swiper("#mainBanner", {
    loop:true,
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",      
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });
var mainswiper = new Swiper("#header .mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    loop : true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: "#header .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#header .swiper-button-next",
      prevEl: "#header .swiper-button-prev",
    },
  });

  var bestswiper = new Swiper(".cont1 .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
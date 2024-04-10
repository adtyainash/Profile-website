let swiperCards = new Swiper('.card-content', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

  
    // If you need pagination
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
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
  });
  
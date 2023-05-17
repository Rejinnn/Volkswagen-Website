// car swiper slider
var swiper = new Swiper(".mySwiper",{
   effect : 'fade',
   speed: 1000,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
  });

  // mobile menu

  let mobileMenuIcon = document.querySelector('header .fa-bars')
  let menu = document.querySelector('header .menu')

  mobileMenuIcon.addEventListener('click', function(){
    menu.classList.toggle("open");
  })

  
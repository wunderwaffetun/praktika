$(document).ready(function(){
    $(".slide-one").owlCarousel({
          loop: true, //Зацикливаем слайдер
          margin:10, //Отступ от картино если выводите больше 1
          nav:false, //Отключил навигацию
          autoplay: false, //Автозапуск слайдера
          smartSpeed:1000, //Время движения слайда
          autoplayTimeout:2000, //Время смены слайда
          responsive:{ //Адаптация в зависимости от разрешения экрана
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:3
              }
          }
      });
  
      $(".slide-two").owlCarousel({
          loop:true, //Зацикливаем слайдер
          margin:10, //Отступ от картино если выводите больше 1
          nav:false, //Отключил навигацию
          autoplay:true, //Автозапуск слайдера
          smartSpeed:2000, //Время движения слайда
          autoplayTimeout:4000, //Время смены слайда
          responsive:{ //Адаптация в зависимости от разрешения экрана
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:5
              }
          }
      });
  });  
import style from "./static/_scss/main.scss";
import $ from 'jquery';
import 'slick-carousel';

window.$ = window.jQuery = $;

$(document).ready(function(){
  $('.callback__text').on('click', ()=>{
    $('.modal-wrapper').fadeIn('slow')
  })

  $('.modal-wrapper').on('click', (e)=>{
    if(e.target.className === 'modal-wrapper' || e.target.className === 'modal__closeBtn'){
      $('.modal-wrapper').fadeOut();
    }
})
  let slider = ()=>{
    $('.banner').slick({
      slidesToShow:1,
      slidesToScroll:1,
      prevArrow:'.navigation__prev',
      nextArrow:'.navigation__next',
      fade:true,
      autoplay:true,
      autoplaySpeed:4000
    });
  }

  slider()
})

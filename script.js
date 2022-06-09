$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) {
      $('header').addClass("stick");
    }else {
      $('header').removeClass("stick");
    }if(this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show")
    }else {
      $('.scroll-up-btn').removeClass("show")
    }
  })
});

$('.scroll-up-btn').click(function() {
  $('html').animate({scrollTop: 0})
})


const btnMobile = document.querySelector('#btn-mobile')

function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault()
  const nav = document.querySelector('nav')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
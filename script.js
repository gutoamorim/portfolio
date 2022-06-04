$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) {
      $('header').addClass("stick");
    }else {
      $('header').removeClass("stick");
    }
  })
});

const btnMobile = document.querySelector('#btn-mobile')

function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault()
  const nav = document.querySelector('nav')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('header').addClass('stick')
    } else {
      $('header').removeClass('stick')
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show')
    } else {
      $('.scroll-up-btn').removeClass('show')
    }
  })
})

$('.scroll-up-btn').click(function () {
  $('html').animate({ scrollTop: 0 })
})

var typed = new Typed('.typing', {
  strings: ['Front end development student'],
  typeSpeed: 100,
  // backSpeed: 60,
  // loop: true
})

const btnMobile = document.querySelector('#btn-mobile')
const nav = document.querySelector('nav')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  nav.classList.toggle('active')
  const active = nav.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active)
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar menu')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir menu')
  }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

const routes = document.querySelectorAll('.route')

function closeMenu() {
  nav.classList.remove('active')
}

function navigateSection(route) {
  route.addEventListener('click', closeMenu)
}

routes.forEach(navigateSection)

const sections = document.querySelectorAll('.js-scroll')
const windowMetade = window.innerHeight

function animaScroll() {
  sections.forEach((section)=> {
    const sectionTop = section.getBoundingClientRect().top - windowMetade
    if(sectionTop < 0) {
      section.classList.add('ativo')
    }
  })
}
animaScroll()
window.addEventListener('scroll', animaScroll)

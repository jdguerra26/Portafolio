const showMenuMobile = () => {
  const nav = document.getElementById('nav')
  const bgNav = document.getElementById('bg-nav-mobile')
  nav.classList.add('nav-active')
  bgNav.classList.add('bg-active')
}

const hideMenuMobile = () => {
  const nav = document.getElementById('nav')
  const bgNav = document.getElementById('bg-nav-mobile')
  nav.classList.remove('nav-active')
  bgNav.classList.remove('bg-active')
}
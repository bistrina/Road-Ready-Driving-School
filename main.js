const navMenu = document.querySelector('.nav__menu')
const navMenuOpen = document.querySelector('.nav__menu-open')
const navMenuClose = document.querySelector('.nav__menu-close')

navMenuOpen.addEventListener('click', ()=> {
    navMenu.Style.display = 'flex'
    navMenuOpen.Style.display = 'none'
    navMenuClose.Style.display = 'inline-block'
})

navMenuClose.addEventListener('click', ()=> {
    navMenu.Style.display = 'none'
    navMenuOpen.Style.display = 'inline-block'
    navMenuClose.Style.display = 'none'
})


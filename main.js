const ShowMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
ShowMenu('nav-toggle','nav-menu')

const NavLink = document.querySelectorAll('.nav__link')

function linkAction(){
    NavLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const NavMenu = document.getElementById("nav-menu")
    NavMenu.classList.remove('show')
}

NavLink.forEach(n => n.addEventListener('click', linkAction))

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    direction: 2000,
    reset: true
})

sr.reveal('.home__title',{delay: 200})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__social-icon',{interval: 200})

sr.reveal('.about__img',{delay: 200})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})

sr.reveal('.skills__subtitle',{delay: 200})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{interval: 200})

sr.reveal('.work__img',{interval: 200})

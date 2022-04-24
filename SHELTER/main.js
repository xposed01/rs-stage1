

// BURGER-MENU

const menuBurger = document.querySelector('.menu-burger');
const navigation = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');
const blackoutWindow = document.querySelector('.blackout');
const activeLink = document.querySelector('.active-link');
const headerOurPets = document.querySelector('.header');

function menuEvents() {
    // menu animation
    navigation.classList.toggle('_active');
    // stop scroll
    document.querySelector('body').classList.toggle('_lock');
    // burger animation
    const is90deg = (menuBurger.style.transform === 'rotate(90deg)');
    menuBurger.style.transform = is90deg ? 'rotate(0deg)' : 'rotate(90deg)';
    // blackout
    document.querySelector('.blackout').classList.toggle('_blackout-active');
    // deactivate link
    activeLink.href = '#!';
    
    const isHeaderSticky = headerOurPets.style.position === 'sticky';
    headerOurPets.style.position = isHeaderSticky ? 'none' : 'sticky';


}

// click events
menuBurger.addEventListener('click', menuEvents);
navLinks.addEventListener('click', menuEvents);
blackoutWindow.addEventListener('click', menuEvents);





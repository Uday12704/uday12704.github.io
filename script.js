var typed = new Typed(".auto-type",{
    strings: ["Web developer", "Frontend developer", "Data analyst"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const number1 = document.getElementById("pert-1");
const number2 = document.getElementById("pert-2");
const number3 = document.getElementById("pert-3");
const number4 = document.getElementById("pert-4");
const number5 = document.getElementById("pert-5");
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

percent();

function percent(){
    setInterval(() => {
        if (count1 == 85) {
            clearInterval();
            return;
        }
        
        count1 += 1;
        number1.innerHTML = count1 + "%";
        number2.innerHTML = count1 + "%";

        }, 3000 / 85);

    setInterval(() => {
        if (count2 == 65) {
            clearInterval();
            return;
        }
        
        count2 += 1;
        number3.innerHTML = count2 + "%";
        }, 3000 / 65);

    setInterval(() => {
        if (count3 == 75) {
            clearInterval();
            return;
        }
        
        count3 += 1;
        number4.innerHTML = count3 + "%";
        }, 3000 / 75);

    setInterval(() => {
        if (count4 == 50) {
            clearInterval();
            return;
        }
        
        count4 += 1;
        number5.innerHTML = count4 + "%";
        }, 3000 / 50);
}

/* Toogle bar */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* scroll section active link */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
/* sticky navbar */
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/* remove toggle icon and navbar */
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

/* Scroll reveal */

ScrollReveal({ 
    distance: '80px', duration: 1000, delay: 1000,
});
/* delay 500 */
ScrollReveal().reveal('.logo', { origin: 'left' ,delay: 500 });
ScrollReveal().reveal('.navbar, #menu-icon', { origin: 'bottom' ,delay: 500 });

/* delay 1000 */
ScrollReveal().reveal('.home-content h1, .heading, form', { origin: 'top' });
ScrollReveal().reveal('.home-content, .home-content h3, .project-container, .about, .conatact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h2,.home-content p, .about-img, .rad-bar4, .rad-bar5', { origin: 'left' });
ScrollReveal().reveal('.home-img, .about-content h3, .about-content p, .skill-heading, .rad-bar1, .rad-bar2, .rad-bar3', { origin: 'right' });

/* delay 1500 */
ScrollReveal().reveal('.social-media', { origin: 'right' ,delay: 1500 });
ScrollReveal().reveal('.btn', { origin: 'bottom' ,delay: 1500 });

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
const number6 = document.getElementById("pert-6");
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

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
        number5.innerHTML = count3 + "%";
        }, 3000 / 75);

    setInterval(() => {
        if (count4 == 50) {
            clearInterval();
            return;
        }
        
        count4 += 1;
        number6.innerHTML = count4 + "%";
        }, 3000 / 50);
}

function animateCircle() {
    const circle1 = document.querySelector('.rad-bar1 circle');
    const circle2 = document.querySelector('.rad-bar2 circle');
    const circle3 = document.querySelector('.rad-bar3 circle');
    const circle4 = document.querySelector('.rad-bar4 circle');
    const circle5 = document.querySelector('.rad-bar5 circle');
    const circle6 = document.querySelector('.rad-bar6 circle');

    circle1.style.animation = "rad1 1s ease forwards";
    circle1.style.animationDelay = "2s";
    circle2.style.animation = "rad2 1s ease forwards";
    circle2.style.animationDelay = "2s";
    circle3.style.animation = "rad3 1s ease forwards";
    circle3.style.animationDelay = "2s";
    circle4.style.animation = "rad4 1s ease forwards";
    circle4.style.animationDelay = "2s";
    circle5.style.animation = "rad5 1s ease forwards";
    circle5.style.animationDelay = "2s";
    circle6.style.animation = "rad6 1s ease forwards";
    circle6.style.animationDelay = "2s";
}

let counted = false;
window.addEventListener('scroll', () => {
    let skills = document.getElementById("skill"); // or any container div
    let rect = skills.getBoundingClientRect();

    if (!counted && rect.top < window.innerHeight && rect.bottom >= 0) {
        percent();
        animateCircle();
        counted = true;
    }
});


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
    let top = window.scrollY;
    let header = document.querySelector('header');
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    header.classList.toggle('sticky', top > 100);

    // Remove toggle icon and navbar on scroll
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
ScrollReveal().reveal('.home-content h1, .heading, form', { origin: 'top' ,delay: 500});
ScrollReveal().reveal('.home-content, .home-content h3, .project-container, .about, .conatact form', { origin: 'bottom' ,delay: 500});
ScrollReveal().reveal('.home-content h2,.home-content p, .about-img, .rad-bar4, .rad-bar5, .rad-bar6', { origin: 'left' ,delay: 500});
ScrollReveal().reveal('.home-img, .about-content h3, .about-content p, .skill-heading, .rad-bar1, .rad-bar2, .rad-bar3', { origin: 'right' ,delay: 500});

/* delay 1500 */
ScrollReveal().reveal('.social-media', { origin: 'right' ,delay: 1000 });
ScrollReveal().reveal('.btn', { origin: 'bottom' ,delay: 1000 });

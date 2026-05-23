window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 2200);

});

/* MENU MOBILE */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

/* SMOOTH SCROLL */

document.querySelectorAll('a[href="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

});

/* CARD ANIMATION */

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});

/* INITIAL CARD STATE */

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 1s ease";

});

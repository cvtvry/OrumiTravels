window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});

/* MENU MOBILE */

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* CARDS ANIMATION */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "0.8s";

});

window.addEventListener("scroll", () => {

    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }

    });

});

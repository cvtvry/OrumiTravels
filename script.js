window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2200);

});

/* MENU MOBILE */

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* SCROLL CARDS */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(50px)";

    card.style.transition = "0.8s ease";

});

window.addEventListener("scroll", () => {

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < trigger){

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }

    });

});

/* LOADER */

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

/* HEADER SCROLL */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/* SCROLL REVEAL */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold:0.2
});

document.querySelectorAll(
".card, .promo-box, .about-box, .booking-box"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {

    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;

});

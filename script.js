// AlphaX Space Website

const navbar = document.querySelector(".navbar");


// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// SECTION REVEAL

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach((section) => {

    observer.observe(section);

});


console.log("AlphaX Space loaded.");

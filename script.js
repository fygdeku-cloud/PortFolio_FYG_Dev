/* ==========================
   MENU MOBILE
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

});

/* ==========================
   HEADER SCROLL
========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(15,23,42,0.95)";

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.3)";

    } else {

        header.style.background =
            "rgba(15,23,42,0.80)";

        header.style.boxShadow = "none";

    }

});

/* ==========================
   SMOOTH SCROLL
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        navbar.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fas fa-bars"></i>';

    });

});

/* ==========================
   SCROLL ANIMATION
========================== */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

const hiddenElements = document.querySelectorAll(
    ".section-title, .skill-card, .project-card, .info-card, .contact-card, .timeline-item"
);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

/* ==========================
   SKILL HOVER EFFECT
========================== */

const skillCards =
    document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});

/* ==========================
   PROJECT CARD EFFECT
========================== */

const projects =
    document.querySelectorAll(".project-card");

projects.forEach(project => {

    project.addEventListener("mousemove", e => {

        const rect =
            project.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        project.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(79,70,229,.4),
            #1e293b)`;

    });

    project.addEventListener("mouseleave", () => {

        project.style.background =
            "#1e293b";

    });

});

/* ==========================
   TYPING EFFECT HERO
========================== */

const heroText =
    document.querySelector(".hero-content p");

const text =
    "Développeur Web & Mobile passionné par la création d'applications modernes, performantes et intuitives.";

let index = 0;

function typeWriter() {

    if (!heroText) return;

    if (index < text.length) {

        heroText.textContent +=
            text.charAt(index);

        index++;

        setTimeout(typeWriter, 25);

    }

}

if (heroText) {

    heroText.textContent = "";

    setTimeout(typeWriter, 800);

}

/* ==========================
   BACK TO TOP BUTTON
========================== */

const backTop =
    document.createElement("button");

backTop.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

backTop.classList.add("back-top");

document.body.appendChild(backTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("visible");

    } else {

        backTop.classList.remove("visible");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* ==========================
   COUNTER ANIMATION
========================== */

function animateValue(element, start, end, duration) {

    let startTime = null;

    function animation(currentTime) {

        if (!startTime)
            startTime = currentTime;

        const progress =
            Math.min(
                (currentTime - startTime) /
                duration,
                1
            );

        element.textContent =
            Math.floor(
                progress *
                (end - start) +
                start
            );

        if (progress < 1) {

            requestAnimationFrame(
                animation
            );

        }

    }

    requestAnimationFrame(animation);

}

/* ==========================
   PARALLAX HERO
========================== */

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero");

    let offset =
        window.pageYOffset;

    if (hero) {

        hero.style.backgroundPositionY =
            offset * 0.4 + "px";

    }

});

/* ==========================
   PRELOADER
========================== */

window.addEventListener("load", () => {

    const loader =
        document.createElement("div");

    loader.classList.add("loader");

    document.body.appendChild(loader);

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 500);

    }, 300);

});

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(
`
=================================
 Portfolio FYG
 Développé avec HTML CSS JS
=================================
`
);
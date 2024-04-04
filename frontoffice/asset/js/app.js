"use strict";

// sélectionnez tous les liens avec un href commençant par #
const lien = document.querySelectorAll('a[href^="#"]');

// ajouter un écouteur d'événement à chaque lien
lien.forEach((link) => {
  link.addEventListener("click", (e) => {
    // empêcher le comportement par défaut du lien
    e.preventDefault();

    // obtenir l'identifiant de la section cible du lien
    const id = link.getAttribute("href").substring(1);

    // trouver la section cible
    const target = document.getElementById(id);

    // faire défiler en douceur jusqu'à la section cible
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

let menuBox = document.getElementById("menuBox");
let menuIcon = document.getElementById("menuIcon");
let li = document.querySelectorAll("li");

menuIcon.addEventListener("click", function () {
  menuBox.classList.toggle("open-menu");

  if (menuBox.classList.contains("open-menu")) {
    menuIcon.src = "frontoffice/asset/img/close1.webp";
    cursorDot.style.background = "white";
    cursorOutline.style.border = "2px solid white";
  } else {
    menuIcon.src = "frontoffice/asset/img/menu.webp";
    cursorDot.style.background = "#2a2a2a";
    cursorOutline.style.border = "2px solid #282a39";
  }
});

li.forEach(function (item) {
  item.addEventListener("click", function () {
    menuBox.classList.remove("open-menu");
    menuIcon.src = "frontoffice/asset/img/menu.webp";
    cursorDot.style.background = "#2a2a2a";
    cursorOutline.style.border = "2px solid #282a39";
  });
});

let iconePDF = document.querySelector(".img-cv");
let linkPDF = document.querySelector(".cv-link");

if (window.innerWidth > 1000) {
  linkPDF.addEventListener("mouseover", function () {
    iconePDF.src = "frontoffice/asset/img/pdf.webp";
  });

  linkPDF.addEventListener("mouseout", function () {
    iconePDF.src = "frontoffice/asset/img/pdf1.webp";
  });
}

// animations avec GSAP et ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

gsap.from(".social-media a", {
  scrollTrigger: {
    trigger: ".social-media",
    toggleActions: "restart none none reverse",
    start: "top 50%",
    end: "bottom 30%",
  },
  y: 100,
  opacity: 0,
  scale: 0,
  ease: "elastic.out(0.4,0.15)",
  duration: 1,
  stagger: 0.2,
});

gsap.from("#section-projets", {
  scrollTrigger: {
    trigger: "#section-projets",
    toggleActions: "restart none none reverse",
    start: "top 80%",
  },
  x: "-100vw",
  duration: 0.5,
});

gsap.from(".slides-container", {
  scrollTrigger: {
    trigger: ".slides-container",
    start: "top center",
  },
  y: "100vh",
  duration: 0.5,
  stagger: 0.5,
});

if (window.innerWidth > 1000) {
  const project = document.querySelector(".slides");

  function getScrollAmount() {
    let projectWidth = project.scrollWidth;
    return -(projectWidth - window.innerWidth / 1.6);
  }

  const tween = gsap.to(project, {
    x: getScrollAmount,
    y: 0,
    duration: 3,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: "#projets",
    start: "top 0%",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    animation: tween,
    scrub: 3,
    invalidateOnRefresh: true,
  });
}

gsap.to(".text", { duration: 0.4, y: "0%", stagger: 0.2 });

/** CURSOR */

let cursorDot = document.querySelector(".cursor-dot");
let cursorOutline = document.querySelector(".cursor-outline");

if (window.innerWidth > 1000) {
  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.top = `${posY}px`;
    cursorDot.style.left = `${posX}px`;

    //cursorOutline.style.top = `${posY}px`;
    //cursorOutline.style.left = `${posX}px`;

    cursorOutline.animate(
      {
        top: `${posY}px`,
        left: `${posX}px`,
      },
      { duration: 500, fill: "forwards" }
    );
  });
}

let links = document.querySelectorAll(".link-social-media");

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursorDot.style.background = "white";
    cursorOutline.style.border = "2px solid white";
  });

  link.addEventListener("mouseleave", () => {
    cursorDot.style.background = "#2a2a2a";
    cursorOutline.style.border = "2px solid #282a39";
  });
});

let competences = document.querySelectorAll(".competences");

competences.forEach((slide) => {
  slide.addEventListener("mouseover", () => {
    cursorDot.style.background = "white";
    cursorOutline.style.border = "2px solid white";
  });

  slide.addEventListener("mouseleave", () => {
    cursorDot.style.background = "#2a2a2a";
    cursorOutline.style.border = "2px solid #282a39";
  });
});

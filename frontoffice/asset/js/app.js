"use strict";

const lien = document.querySelectorAll('a[href^="#"]');

lien.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    const target = document.getElementById(id);
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
    document.body.style.overflow = "hidden";
    menuIcon.src = "frontoffice/asset/img/close1.webp";
  } else {
    document.body.style.overflow = "auto";
    menuIcon.src = "frontoffice/asset/img/menu.webp";
  }
});

li.forEach(function (item) {
  item.addEventListener("click", function () {
    menuBox.classList.remove("open-menu");
    document.body.style.overflow = "auto";
    menuIcon.src = "frontoffice/asset/img/menu.webp";
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

gsap.to(".text", { duration: 0.4, y: "0%", stagger: 0.2 });

const projet = {
  projet1: {
    titre: "Site web judo club d'ascoux",
    description:
      "Un site dynamique en HTML, CSS et JavaScript pour consulter les horaires et contacts du club de judo local.",
    image: "frontoffice/asset/img/judo.webp",
    lien: "https://ascoux-judoclub.fr/",
    video: "frontoffice/asset/videos/ascoux_judoclub_video.webm",
  },
  projet2: {
    titre: "Jeu Snake",
    description:
      "Un projet en HTML et JavaScript utilisant le Canvas pour recréer le classique jeu Snake, permettant de maîtriser les éléments JavaScript et l'API Canvas pour des animations interactives.",
    image: "frontoffice/asset/img/snake.webp",
    lien: "https://killianx45.github.io/snake/",
    video: "frontoffice/asset/videos/snake_video.webm",
  },
  projet3: {
    titre: "Blog en Symfony",
    description:
      "Un blog interactif développé avec Symfony, permettant la publication d'articles, l'ajout de notes, et intégrant un système de connexion sécurisé, le tout basé sur une base de données fournie par le client.",
    image: "frontoffice/asset/img/blog_symfony.webp",
    lien: "https://github.com/killianx45/projet_symfony",
    video: "frontoffice/asset/videos/blog_symfony_video.webm",
  },
  projet4: {
    titre: "Cinémathèque de France",
    description:
      "Un site web interactif développé avec React, Node.js et MongoDB, offrant une consultation complète des films disponibles, enrichie de fonctionnalités avancées pour les utilisateurs.",
    image: "frontoffice/asset/img/cinetheque_react.webp",
    lien: "https://github.com/killianx45/projetfilerouge_b2d_cinetheque",
    video: "frontoffice/asset/videos/cinetheque_video.webm",
  },
  projet5: {
    titre: "Application chronomètre en Flutter",
    description:
      "Une application mobile basique développée en Flutter pour s'initier au développement d'applications, proposant un chronomètre intuitif avec des fonctionnalités réduites au minimum.",
    image: "frontoffice/asset/img/stopwatch.webp",
    lien: "https://github.com/killianx45/stopwatch",
    video: "frontoffice/asset/videos/stopwatch_video.webm",
  },
};

const popup = document.querySelector(".popup");

document.querySelectorAll(".slide-container img").forEach((image) => {
  image.addEventListener("click", () => {
    const imageSrc = image.getAttribute("src");
    for (const key in projet) {
      if (projet[key].image === imageSrc) {
        const projetData = projet[key];
        popup.innerHTML = `
          <span class="popup-close">&times;</span>
          <div class="content-popup">
            <video class="img-popup" autoplay loop>
              <source src="${projetData.video}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <div class="text-popup">
              <h4>${projetData.titre}</h4>
              <p>${projetData.description}</p>
              <a class="link-projet" href="${projetData.lien}" target="_blank" aria-label="${projetData.titre}" rel="noopener">Voir le projet</a>`;
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        document.body.style.overflow = "hidden";

        const closePopup = document.querySelector(".popup-close");
        closePopup.addEventListener("click", () => {
          popup.style.display = "none";
          document.body.style.overflow = "auto";
        });
        document.addEventListener("click", (e) => {
          if (e.target === popup) {
            popup.style.display = "none";
            document.body.style.overflow = "auto";
          }
        });
      }
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

const sectionProjets = document.querySelector("#section-projets");
const menuDesktop = document.querySelector(".menu-desktop");
const mbgCol = document.querySelectorAll(".Mbg_col_el");

// Horizontal scroll for projects
const projectSection = document.querySelector(".slides");
if (window.innerWidth > 1000) {
  function getScrollAmount() {
    let projectWidth = projectSection.scrollWidth;
    return -(projectWidth - window.innerWidth / 1.6);
  }

  const tween = gsap.to(projectSection, {
    x: getScrollAmount(),
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
    onEnter: () => {
      document.body.classList.add("dark-mode");
      sectionProjets.classList.add("dark-mode");
      menuDesktop.classList.add("dark-mode");
      mbgCol.forEach((col) => col.classList.add("dark-mode"));
    },
    onLeave: () => {
      document.body.classList.remove("dark-mode");
      sectionProjets.classList.remove("dark-mode");
      menuDesktop.classList.remove("dark-mode");
      mbgCol.forEach((col) => col.classList.remove("dark-mode"));
    },
    onEnterBack: () => {
      document.body.classList.add("dark-mode");
      sectionProjets.classList.add("dark-mode");
      menuDesktop.classList.add("dark-mode");
      mbgCol.forEach((col) => col.classList.add("dark-mode"));
    },
    onLeaveBack: () => {
      document.body.classList.remove("dark-mode");
      sectionProjets.classList.remove("dark-mode");
      menuDesktop.classList.remove("dark-mode");
      mbgCol.forEach((col) => col.classList.remove("dark-mode"));
    },
  });
}

// Ajout du gestionnaire d'événements pour les liens du menu
document.querySelectorAll(".menu-desktop a, .menu-box a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    sectionProjets.classList.remove("dark-mode");
    menuDesktop.classList.remove("dark-mode");
    mbgCol.forEach((col) => col.classList.remove("dark-mode"));
  });
});

gsap.to(".largeTitle-txt", {
  scale: 1,
  duration: 3,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".largeTitle-content",
    start: "top center",
    end: "bottom center",
    scrub: true,
    toggleActions: "play reverse play reverse",
  },
});

const MentionLegalPopup = document.querySelector(".mention-popup");
const mentionLegalContent = document.querySelector(".mention-content");

MentionLegalPopup.addEventListener("click", () => {
  mentionLegalContent.classList.add("active");
  document.body.classList.add("no-scroll");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".mention-popup, .mention-content")) {
    mentionLegalContent.classList.add("exiting");
    document.body.classList.remove("no-scroll");
    mentionLegalContent.addEventListener(
      "animationend",
      () => {
        mentionLegalContent.classList.remove("active", "exiting");
      },
      { once: true }
    );
  }
});

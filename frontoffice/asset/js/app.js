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
  } else {
    menuIcon.src = "frontoffice/asset/img/menu1.webp";
  }
});

li.forEach(function (item) {
  item.addEventListener("click", function () {
    menuBox.classList.remove("open-menu");
    menuIcon.src = "frontoffice/asset/img/menu1.webp";
  });
});

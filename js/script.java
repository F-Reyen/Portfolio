
// RÉCUPÉRATION DE LA PAGE

const page = document.querySelector(".hero");

// ÉLÉMENTS ANIMÉS

const elements = document.querySelectorAll(
  ".lettre, .barre"
);

// REJOUER L'ANIMATION EN CLIQUANT

page.addEventListener("click", () => {

  elements.forEach((element) => {
    element.style.animation = "none";
  });

  // Réinitialisation
  void page.offsetWidth;

  // Relancer les animations
  elements.forEach((element) => {
    element.style.removeProperty("animation");
  });

});

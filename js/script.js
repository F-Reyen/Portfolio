
const lignes = document.querySelectorAll(".ligne");
const barre = document.querySelector(".barre");
const page = document.querySelector(".hero");

let compteur = 0;

lignes.forEach((ligne) => {
  const texte = ligne.textContent.trim();

  ligne.textContent = "";
  ligne.setAttribute("aria-hidden", "true");

  [...texte].forEach((caractere) => {
    const lettre = document.createElement("span");
    lettre.className = "lettre";

    lettre.textContent =
      caractere === " " ? "\u00A0" : caractere;

    const delai = 0.25 + compteur * 0.115;

    lettre.style.setProperty(
      "--delai",
      `${delai}s`
    );

    ligne.appendChild(lettre);
    compteur++;
  });
});

// Barre après la dernière lettre
barre.style.setProperty(
  "--delai-barre",
  `${0.25 + compteur * 0.115 + 0.5}s`
);

// Rejouer l'animation au clic
page.addEventListener("click", () => {
  const elements = document.querySelectorAll(
    ".lettre, .barre"
  );

  elements.forEach(element => {
    element.style.animation = "none";
  });

  void page.offsetWidth;

  elements.forEach(element => {
    element.style.removeProperty("animation");
  });
});

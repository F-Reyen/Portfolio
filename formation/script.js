const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".formation-card");

const documentViewer = document.getElementById("documentViewer");
const viewerImg = document.getElementById("viewerImg");
const closeViewer = document.getElementById("closeViewer");

/* Filtres */
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    cards.forEach((card) => {
      const categories = card.getAttribute("data-category");

      if (filter === "all" || categories.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

/* Ouverture des images */
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const filePath = card.getAttribute("data-file");
    const title = card.querySelector("h3").textContent;

    if (!filePath) {
      alert("Aucun document n'est encore disponible.");
      return;
    }

    viewerImg.src = filePath;
    viewerImg.alt = title;

    documentViewer.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

/* Fermer le viewer */
function closeDocumentViewer() {
  documentViewer.classList.remove("active");
  viewerImg.src = "";
  document.body.style.overflow = "";
}

closeViewer.addEventListener("click", closeDocumentViewer);

/* Fermer en cliquant sur le fond noir */
documentViewer.addEventListener("click", (e) => {
  if (e.target === documentViewer) {
    closeDocumentViewer();
  }
});

/* Fermer avec Échap */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDocumentViewer();
  }
});
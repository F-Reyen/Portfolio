const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".formation-card");

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

const imageViewer = document.getElementById("imageViewer");
const viewerImg = document.getElementById("viewerImg");
const closeViewer = document.getElementById("closeViewer");
const cardImages = document.querySelectorAll(".image-box img");

cardImages.forEach((img) => {
  img.addEventListener("click", () => {
    viewerImg.src = img.src;
    viewerImg.alt = img.alt;
    imageViewer.classList.add("active");
  });
});

closeViewer.addEventListener("click", () => {
  imageViewer.classList.remove("active");
});

imageViewer.addEventListener("click", (e) => {
  if (e.target === imageViewer) {
    imageViewer.classList.remove("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    imageViewer.classList.remove("active");
  }
});
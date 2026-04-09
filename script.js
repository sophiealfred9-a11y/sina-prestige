// Bouton scroll vers produits

console.log("JS chargé");

document.addEventListener("DOMContentLoaded", function () {

  const categoryFilter = document.getElementById("categoryFilter");
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");

  const durationBtn = document.getElementById("durationBtn");
  const durationDropdown = document.getElementById("durationDropdown");
  const durationRange = document.getElementById("durationRange");
  const durationValue = document.getElementById("durationValue");

  const resetBtn = document.getElementById("resetBtn");

  const formationCards = document.querySelectorAll(".formation-card");

  let selectedDuration = durationRange ? durationRange.value : 12;

  /* OUVRIR / FERMER MENU DURÉE */
  if (durationBtn && durationDropdown) {
    durationBtn.addEventListener("click", function () {
      durationDropdown.classList.toggle("active");
    });
  }

  /* MAJ TEXTE DURÉE */
  if (durationRange && durationValue) {
    durationRange.addEventListener("input", function () {
      selectedDuration = this.value;
      durationValue.textContent = selectedDuration;
    });
  }

  /* FILTRE GLOBAL */
  function filterCards() {

    const selectedCategory = categoryFilter ? categoryFilter.value.toLowerCase() : "all";
    const searchValue = searchInput ? searchInput.value.toLowerCase().trim() : "";

    formationCards.forEach(function (card) {

      const cardCategory = (card.dataset.category || "").toLowerCase();
      const cardDuration = parseInt(card.dataset.duration) || 0;
      const cardTitle = card.querySelector("h3").textContent.toLowerCase();

      const categoryMatch =
        selectedCategory === "all" || cardCategory === selectedCategory;

      const textMatch =
        searchValue === "" || cardTitle.includes(searchValue);

      const durationMatch =
        cardDuration <= selectedDuration;

      if (categoryMatch && textMatch && durationMatch) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }

    });
  }

  /* BOUTON RECHERCHER */
  if (searchBtn) {
    searchBtn.addEventListener("click", filterCards);
  }

  /* ENTER DANS INPUT */
  if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        filterCards();
      }
    });
  }

  /* RESET */
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {

      // reset texte
      if (searchInput) searchInput.value = "";

      // reset catégorie
      if (categoryFilter) categoryFilter.value = "all";

      // reset durée
      if (durationRange) durationRange.value = 12;
      if (durationValue) durationValue.textContent = 12;

      selectedDuration = 12;

      // afficher toutes les cartes
      formationCards.forEach(function (card) {
        card.classList.remove("hidden");
      });

    });
  }

});


  const burger = document.getElementById("burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

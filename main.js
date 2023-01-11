// Render function
import { renderCards } from "./components/renderCards.js";
import { renderAgents } from "./components/renderAgents.js";
import { renderCardModal } from "./components/renderCardModal.js";

const overlayScreen = document.querySelector("[data-overlay]");
const propertyModal = document.querySelector("[data-modal]");

// FEATURED PROPERTIES CARD
const url = "http://localhost:3000/property";
let cards = [];

// Show modal funtion
const showModal = (e) => {
  const cardModal = cards.filter(
    (card) => card.id === parseInt(e.target.parentElement.id)
  );
  renderCardModal(cardModal[0], propertyModal);
  overlayScreen.classList.add("active");
};

// adding listener to each card
const addListenerCard = () => {
  const propertiesCard = document.querySelectorAll(".property__card");
  for (let i = 0; i < propertiesCard.length; i++) {
    propertiesCard[i].addEventListener("click", (e) => {
      showModal(e);
    });
  }
};

// Fetch cards data
const fetchCards = () => {
  const response = fetch(url);
  response
    .then((response) => response.json())
    .then((data) => {
      cards = data;
      data.forEach((card) => {
        renderCards(card);
      });
    })
    .then(() => {
      addListenerCard();
    });
};

fetchCards();

// Fetch agents data
const fetchAgents = () => {
  const response = fetch("http://localhost:3000/agents");
  response
    .then((response) => response.json())
    .then((data) => data.forEach((agent) => renderAgents(agent)));
};

fetchAgents();

overlayScreen.addEventListener("click", () => {
  overlayScreen.classList.remove("active");
});

// FINDER
const bannerForm = document.getElementById("bannerForm");
const propertyType = document.getElementById("propertyType");
const propertyStatus = document.getElementById("propertyStatus");
const propertyGrid = document.getElementById("propertyGrid");
const allProperties = document.getElementById("allProperties");

const handleSubmit = (e) => {
  e.preventDefault();

  propertyGrid.innerHTML = "";

  window.scrollBy(0, 850);

  const filterProperties = cards.filter(
    (card) =>
      card.type === propertyType.value && card.status === propertyStatus.value
  );

  if (filterProperties.length > 0) {
    filterProperties.forEach((property) => renderCards(property));
  } else {
    propertyGrid.innerHTML = `
      <div class="featured__properties-error">
      <p class="featured__properties-error__message">
      No properties found
      </p>
      </div>
      `;
  }

  bannerForm.reset();
};

bannerForm.addEventListener("submit", (e) => handleSubmit(e));
allProperties.addEventListener("click", () => {
  propertyGrid.innerHTML = "";
  cards.forEach((card) => renderCards(card));
});

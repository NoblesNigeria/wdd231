import {discover} from "../data/discover.mjs"

const container = document.querySelector("#discover-container");

discover.forEach(item => {

  const card = document.createElement("section");
  card.classList.add("discover-card");

  const h2 = document.createElement("h2");
  h2.textContent = item.name;

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.name;
  img.loading = "lazy";

  const p = document.createElement("p");
  p.textContent = item.description;

  const p1 = document.createElement("p1");
  p.textContent = item.address;

  card.append(h2, img, p);
  container.appendChild(card);
});



const visitMessage = document.getElementById("visit-message");

// Get last visit from localStorage
const lastVisit = localStorage.getItem("lastVisit");

// Get today's date (no time)
const today = new Date().toDateString();

if (!lastVisit) {
  // First visit
  visitMessage.textContent =
    "Welcome! Let us know if you have any questions.";
} else if (lastVisit === today) {
  // Visited today
  visitMessage.textContent =
    "Back so soon! Awesome!";
} else {
  // Visited before
  visitMessage.textContent =
    `Welcome back! You last visited on ${lastVisit}.`;
}

// Save today's visit
localStorage.setItem("lastVisit", today);
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

  card.append(h2, img, p);
  container.appendChild(card);
});




const card = document.createElement("div");
card.classList.add("card");

const title = document.createElement("h2");
title.textContent = "Titulo de la tarjeta";
card.appendChild(title);

const descriptionText = document.createElement("p");
descriptionText.textContent = "Titulo de la tarjeta";
card.appendChild(descriptionText);

const image = document.createElement("img");
image.src = "https://rollingtechnology.netlify.app/img/imac..JPG";
card.appendChild(image);

const container = document.getElementById("container");
container.appendChild(card);

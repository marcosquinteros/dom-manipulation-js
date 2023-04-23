// const card = document.createElement("div");
// card.classList.add("card");

// const title = document.createElement("h2");
// title.textContent = "Titulo de la tarjeta";
// card.appendChild(title);

// const descriptionText = document.createElement("p");
// descriptionText.textContent = "Titulo de la tarjeta";
// card.appendChild(descriptionText);

// const image = document.createElement("img");
// image.src = "https://rollingtechnology.netlify.app/img/imac..JPG";
// card.appendChild(image);

// const container = document.getElementById("container");
// container.appendChild(card);

class ProductCard {
  constructor(nombre, description) {
    this.nombre = nombre;
    this.description = description;
  }

  createCard() {
    const card = document.createElement("div");
    card.classList.add("card");

    const nombre = document.createElement("h2");
    nombre.textContent = this.nombre;

    const description = document.createElement("p");
    description.textContent = this.description;

    const container = document.getElementById("container");
    container.appendChild(card);
    card.appendChild(nombre);
    card.appendChild(description);
  }
}

let producto1 = new ProductCard("Primera tarjeta", "Description del producto");
producto1.createCard();

let producto2 = new ProductCard("Segunda tarjeta", "Description del producto");
producto2.createCard();

let producto3 = new ProductCard("Tercera tarjeta", "Description del producto");
producto3.createCard();

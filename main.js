import { dataProducts } from "./data/data.js";

const $productCard = document.querySelector("[data-product-card]");

const renderCards = (data, container) => {
  data.forEach((card) => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
    <img src=${card.img} alt="">
    <h2 class="card-title">${card.nombre}</h2>
    <p class="card-price">${card.precio}</p>
    <button id=${card.id}>Detalle</button>
    <button>Carrito</button>
    
    `;
    container.appendChild(div);

    document.getElementById(`${card.id}`).addEventListener("click", () => {
      console.log(`el id es = ${card.id}`);
    });
  });
};

renderCards(dataProducts, $productCard);

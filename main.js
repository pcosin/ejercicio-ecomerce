import { fetchData } from "./assets/js/fetchData.js";
import { filterProducts } from "./assets/js/filter.js";

const $productCard = document.querySelector("[data-product-card]");

fetchData("./data/data.json")
  .then((productoApi) => {
    renderCards(productoApi, $productCard);
    console.log(filterProducts("L", productoApi ))

  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });

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


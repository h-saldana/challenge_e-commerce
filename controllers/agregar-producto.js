import { productoServices } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("[data-name]").value;
  const url = document.querySelector("[data-image]").value;
  const preco = document.querySelector("[data-price]").value;

  productoServices
    .creaProducto(nome, url, preco)
    .then((respuesta) => {
      window.location.href = "../screens/productos.html";
      console.log(respuesta);
    })
    .catch((err) => {
      console.log(err);
    });
});

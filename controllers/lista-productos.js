import { productoServices } from "../servicios/productos-servicios.js";
import { formatPrice } from "../format-price.js";

const getProducts = (name, price, image, id) => {
  const card = document.createElement("div");

  const contenido = `
    <div class="produto">
        <div class="container">
            <button class="buttonDelete" type="button">
              <img class="deleteImage" src="../assets/img/delete.png" alt="Deletar" />
            </button>
            
            <a href="../screens/editar-producto.html?id=${id}">
            
              <button class="buttonEdit" type="button">
                <img class="editImage" src="../assets/img/edit.png" alt="Editar" />
              </button>
            
            </a>
        </div>
        
        <img src="${image}" alt="img">
        <h1 class="product-name"> ${name} </h1>
        <p class="preco">${formatPrice(price)}</p>
    </div>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const productos = document.querySelector("[datos-productos]");

productos.addEventListener("click", async (evento) => {
  let deleteButton = evento.target.className === "deleteImage";
  if (deleteButton) {
    const producto = evento.target.closest("[data-id]");
    let id = producto.dataset.id;    
    alert("desea eliminar este producto?");
    productoServices
      .deleteProducto(id)
      .then((res) => {
        producto.remove();

        console.log(res);
      })
      .catch((err) => console.log(err));
  }
});

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();

    listaProductos.forEach((producto) => {
      productos.appendChild(
        getProducts(
          producto.name,
          producto.price,
          producto.image,
          producto.id
        )
      );
    });
  } catch (err) {
    console.log(err);
  }
};

render();


import { productoServices } from "../servicios/productos-servicios.js";


const nuevoProducto = (image, name, price, id) => {
    const card = document.createElement("div");
    const contenido = 
    `             
        <div class="primeraLinea__card">
                <img src="${image}" alt="imagen">

                <ul class="datosLista">
                    <li>${name}</li>
                    <li>${price}</li>
                    <li> <a href="../productos.html?id=${id}">Ver Producto</var></a></li>
                </ul>
            </div>
     `;
    card.innerHTML = contenido;
    card.dataset.id = id;
    return card;
}

const producto = document.querySelector("[datos-productos]");


export const render = async () => {
    try {
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach((elemento) => {
            producto.appendChild(nuevoProducto(elemento.image, elemento.name, elemento.price, elemento.id));
                      
        });
    }
    catch (error) {
        console.log(error)
    }
};

render();


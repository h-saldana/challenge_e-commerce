// GET
// const listaProductos = () => fetch("http://localhost:3000/producto").then( respuesta => respuesta.json());
  
// const listaUnProducto = async (id) => {
//   const respuesta = await fetch(`http://localhost:3000/producto/${id}`);
//   return await respuesta.json();
// };

//GET
const listaProductos = () =>
  fetch("http://localhost:3000/producto")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

const listaUnProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((resposta) => {
    return resposta.json();
  });
};




 //POST
const creaProducto = async (name, image, price) => {
  const respuesta = await fetch(`http://localhost:3000/producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      image,
      price,
    }),
  });
  if (respuesta.ok) {
    return respuesta.body;
  }
  throw new Error("no es posible crear un producto");
};

// PUT/PATCH
const editaProducto = async (id, name, price, desc) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      desc,
    }),
  })
    .then((resposta) => {
      return resposta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE

const deleteProducto = async (id) => {
  return await fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
};
  
  
  
  


export const productoServices = {
    listaProductos,
    listaUnProducto,
    creaProducto,
    editaProducto,
    deleteProducto,
   
   
};


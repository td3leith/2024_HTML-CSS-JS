// Los productos en un array de objetos
let productos;
fetch("/js/inventario.json")
  .then((response) => {
    console.log('dentro de fetch');
    console.log(response);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  })
  .then((productos) => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const listadoProductos = document.querySelector(".listado-productos");
    productos = productos['productos'];
    // Recorro el array de productos
    productos.forEach((producto) => {
      // Creo el HTML con los datos de cada producto
      // filtrar solamente las mascotas
      if (producto.categoria == "mascota") {
        const html = `
              <div data-id="${producto.id}" class="item item-0 dino-container">
              <h3>${producto.nombre}</h3>
              <img src="${producto.imagen}" width="100" alt="un dino" />
              <p>${producto.descripcion}</p>
              <p>$ ${producto.precio}</p>
              <button type="button" class="agregar">Agregar</button>
              </div>
          `;
        // Agrego la section el html para ir mostrando cada producto
        listadoProductos.innerHTML += html;
      }
    });

    // Escucho todos los eventos click el documento
    document.addEventListener("click", (event) => {
      // Si el elemento donde se hizo click contiene la clase 'agregar'
      if (event.target.classList.contains("agregar")) {
        // Busco el contenedor mas cercano que se un 'article'
        // Obtengo el id del atributo data-id
        const id = event.target.closest("div").dataset.id;

        // Busco el elemento 'producto' dentro del array producto que tenga el 'id'
        const elemento = productos.find((producto) => producto.id == id);
        console.log(elemento);

        // Uso destructuring para creo las constante con los valores del Objeto
        const { nombre, precio, imagen } = elemento;

        // Creo el objeto producto para insertar en el carrito
        const producto = {
          id: id,
          nombre: nombre,
          precio: precio,
          imagen: imagen,
          cantidad: 1,
        };

        carrito.push(producto);

        // Guardo en el localStorage el array carrito en formato JSON
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Obtengo el item 'carrito' del local storage que es un texto
// Lo intento transformar a un Objeto de javaScript
// Si algo falla asigno un array a la constante, sino el Objeto
// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// const listadoProductos = document.querySelector(".listado-productos");
// const listadoAlimentos = document.querySelector(".listado-alimentos");
// const listadoFlora = document.querySelector(".listado-flora");

// listadoProductos.innerHTML = "<h2>Productos</h2>";

// Recorro el array de productos
// productos.forEach((producto) => {
//   // Creo el HTML con los datos de cada producto
//   // filtrar solamente las mascotas
//   if (producto.categoria == "mascota") {
//     const html = `
//             <div data-id="${producto.id}" class="item item-0 dino-container">
//             <h3>${producto.nombre}</h3>
//             <img src="${producto.imagen}" width="100" alt="un dino" />
//             <p>${producto.descripcion}</p>
//             <p>$ ${producto.precio}</p>
//             <button type="button" class="agregar">Agregar</button>
//             </div>
//         `;
//     // Agrego la section el html para ir mostrando cada producto
//     listadoProductos.innerHTML += html;
//   }
// });

// // Escucho todos los eventos click el documento
// document.addEventListener("click", (event) => {
//   // Si el elemento donde se hizo click contiene la clase 'agregar'
//   if (event.target.classList.contains("agregar")) {
//     // Busco el contenedor mas cercano que se un 'article'
//     // Obtengo el id del atributo data-id
//     const id = event.target.closest("div").dataset.id;

//     // Busco el elemento 'producto' dentro del array producto que tenga el 'id'
//     const elemento = productos.find((producto) => producto.id == id);
//     console.log(elemento);

//     // Uso destructuring para creo las constante con los valores del Objeto
//     const { nombre, precio, imagen } = elemento;

//     // Creo el objeto producto para insertar en el carrito
//     const producto = {
//       id: id,
//       nombre: nombre,
//       precio: precio,
//       imagen: imagen,
//       cantidad: 1,
//     };

//     carrito.push(producto);

//     // Guardo en el localStorage el array carrito en formato JSON
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//   }
// });

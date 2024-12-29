// Los productos en un array de objetos
const productos = [
  {
    id: 1,
    categoria: "mascota",
    nombre: "STEGOSAURIO",
    descripcion: "Tiene pinchos en la espalda",
    imagen: "dino0.png",
    precio: 10,
    stock: 1,
  },
  {
    id: 2,
    categoria: "mascota",
    nombre: "TRICERAPTOPS",
    descripcion: "Descripción Producto 2",
    imagen: "dino1.png",
    precio: 20,
    stock: 10,
  },
  {
    id: 3,
    categoria: "mascota",
    nombre: "BRAQUIOSAURIO",
    descripcion: "tiene el cuello largo",
    imagen: "dino3.png",
    precio: 30,
    stock: 80,
  },
  {
    id: 4,
    categoria: "mascota",
    nombre: "PTERODACTILO",
    descripcion: "vuela",
    imagen: "dino_4.png",
    precio: 50,
    stock: 10,
  },
  {
    id: 5,
    categoria: "mascota",
    nombre: "IGUANODON",
    descripcion: "Bipedo con puas en los dedos",
    imagen: "dino_5.png",
    precio: 50,
    stock: 10,
  },
  {
    id: 6,
    categoria: "mascota",
    nombre: "VELOCIRAPTOR",
    descripcion: " es rapido y te come",
    imagen: "dino_6.png",
    precio: 50,
    stock: 10,
  },
  {
    id: 7,
    categoria: "mascota",
    nombre: "GALLIMIMUS",
    descripcion: " es liviano, herviboro y simpatico",
    imagen: "dino1.png",
    precio: 50,
    stock: 10,
  },
  
  {
    id: 8,
    categoria: "mascota",
    nombre: "KUNMINGOSAURUS",
    descripcion: " es inmenso, y es de la familia de los sauropodos",
    imagen: "dino_3.png",
    precio: 50,
    stock: 10,
  },
  {
    id: 9,
    categoria: "mascota",
    nombre: "COMPSOGNATHUS",
    descripcion: " pequeño, es liviano, herviboro y simpatico",
    imagen: "dino_4.png",
    precio: 50,
    stock: 10,
  },
  {
    id: 10,
    categoria: "mascota",
    nombre: "COELURUS",
    descripcion: " de tamaño medio, es liviano, herviboro y simpatico",
    imagen: "dino_5.png",
    precio: 50,
    stock: 10,
  },
  {
    id: 11,
    categoria: "mascota",
    nombre: "ALLOSAURUS",
    descripcion: " de los grandes carnivoros",
    imagen: "dino_6.png",
    precio: 50,
    stock: 10,
  },
  {
    id: 12,
    categoria: "mascota",
    nombre: "TUOJIANGOSAURUS",
    descripcion: " como el stegosaurio pero de china, y es lindo",
    imagen: "dino_7.png",
    precio: 50,
    stock: 10,
  },
  
  {
    id: 14,
    categoria: "alimentos",
    nombre: "croquetas para dinos",
    descripcion: "son crunchis",
    imagen: "dino_slide2.png",
    precio: 50,
    stock: 10,
  },
  {
    id: 15,
    categoria: "flora",
    nombre: "arbustos para dinos",
    descripcion: "son verdes",
    imagen: "dino_slide3.png",
    precio: 50,
    stock: 10,
  },
];

// Obtengo el item 'carrito' del local storage que es un texto
// Lo intento transformar a un Objeto de javaScript
// Si algo falla asigno un array a la constante, sino el Objeto
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const listadoProductos = document.querySelector(".listado-productos");
// const listadoAlimentos = document.querySelector(".listado-alimentos");
// const listadoFlora = document.querySelector(".listado-flora");

// listadoProductos.innerHTML = "<h2>Productos</h2>";

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

carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const btnPagar = document.querySelector("#btn-pagar");

btnPagar.addEventListener("click", function () {
  let confirmacion = confirm("¿Deseas realizar la compra?");
  if (confirmacion == true) {
    alert("has realizado la compra");
    limpiarCarrito();
  }
});

function limpiarCarrito() {
  const items = document.querySelector(".items");
  items.innerHTML = "";
  document.querySelector("#seccion-carrito").innerHTML =
    "<h2>El carrito esta vacio 😵😵😵</h2>";
  localStorage.removeItem("carrito");
}

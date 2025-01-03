carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// console.log(carrito);

if (carrito.length == 0) {
//   document.querySelector("#seccion-carrito").innerHTML =
//     "<h2>El carrito esta vacio 😵😵😵</h2>";
} else {
    
    const items = document.querySelector(".items");
    
    items.innerHTML = "";
    
    let totalAPagar = 0;
    carrito.forEach((item) => {
      const html = `
            <tr data-id="${item.id}">
                <td><img src="${item.imagen}" width="100"/></td>
                <td>${item.nombre}</td>
                <td>${item.cantidad}</td>
                <td>$ ${item.precio}</td>
            </tr>
        `;
      //sumar el precio al total
      totalAPagar += parseFloat(item.precio);
      items.innerHTML += html;
    });
    
    // agregar el total a pagar
    items.innerHTML += `
    <tr>
        <td colspan="3">total a pagar</td>
        <td><strong>$ ${totalAPagar}</strong></td>
    </tr>
    `;

}

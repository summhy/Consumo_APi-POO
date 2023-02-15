import { Producto } from "../class/Producto.js";
function cargarProductos(data) {
  document.querySelector("#container").innerHTML = "";
  data.forEach((element) => {
    const card = `<div class="card"">
                   
                    <div class="card-body">
                    <p class="card-text">${element.nombre}</p>
                </div>
                </div>`;
    document.querySelector("#container").innerHTML += card;
  });
} //<img src="${element.link}" class="card-img-top" alt="...">
const inventario = new Producto();
inventario.listaProductos().then((data) => {
  cargarProductos(data);
});

const crear = document.querySelector("#crear");
crear.addEventListener("click", function () {
  inventario
    .crearProducto({
      id: 0,
      nombre: "XXX",
      precio: 9999,
      link: "string",
      stock: 5,
      etiqueta: "magia,brujas,horoscopo",
      descripcion: "xxxxx",
      idCategoria: 1000,
      idSucursal: 2,
    })
    .then(
      inventario.listaProductos().then((data) => {
        cargarProductos(data);
      })
    );

});

const URL = "./productos.txt";
const Contenedor = require("./contenedor");
const getRandomIndex = require("./servicios/random");

const contenedorProductos = new Contenedor(URL);
let productos;

(async function () {
  productos = await contenedorProductos.getAll();
})();

const express = require("express");
const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`servidor iniciado en el puerto ${server.address().port}`);
});

app.get("/productos", (req, res) => {
  res.send(productos);
});

app.get("/productoRandom", (req, res) => {
  res.send(productos[getRandomIndex(productos)]);
});

const express = require('express');
const rutas = express.Router();
const {listarProductos, buscarProducto, crearProducto, actualizarProducto, eliminarProducto} = require('../controllers/productoController');

rutas.get('/productos/', listarProductos);
rutas.get('/productos/:id', buscarProducto);
rutas.post('/productos/crear', crearProducto);
rutas.put('/productos/:id', actualizarProducto);
rutas.delete('/productos/:id', eliminarProducto)

module.exports = rutas;
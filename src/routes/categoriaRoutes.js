const express = require('express');
const { listarCategorias, crearCategoria, buscarCategoria, actualizarCategoria, eliminarCategoria } = require('../controllers/categoriaController');
const rutas = express.Router();

rutas.get('/categorias/listar', listarCategorias);
rutas.get('/categorias/buscar/:categoria_id', buscarCategoria);
rutas.post('/categorias/crear', crearCategoria );
rutas.put('/categorias/actualizar/:categoria_id', actualizarCategoria)
rutas.delete('/categorias/eliminar/:categoria_id', eliminarCategoria);
module.exports = rutas;
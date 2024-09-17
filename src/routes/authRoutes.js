const express = require('express');
const { registrar, login } = require('../controllers/authController');

const rutas = express.Router();


rutas.post('/registrar', registrar);
rutas.post('/login', login);

module.exports = rutas;
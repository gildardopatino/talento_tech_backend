const express = require('express');
const { registrar, login } = require('../controllers/authController');

const rutas = express.Router();

/**
 * @swagger
 * /auth/registrar:
 *   post:
 *     summary: Registra un usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombres:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario registrado correctamente
 *       400:
 *         description: Error al registrar el usuario
 */
rutas.post('/registrar', registrar);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Autentica un usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario Autenticado correctamente
 *       401:
 *         description: Credenciales invalidas
 */
rutas.post('/login', login);

module.exports = rutas;
require('dotenv').config();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API TalentoTech',
            version: '1.0.0',
            description: 'Documentación de la API de la aplicación TalentoTech',
        },
        servers: [
            {
                url: process.env.PRODUCTION == 'true' ?  process.env.BASE_URL : `http://localhost:${process.env.PORT}`,
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
};
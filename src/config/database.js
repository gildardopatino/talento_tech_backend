require('dotenv').config();
const { Sequelize } = require('sequelize');

if (process.env.PRODUCTION) {
    const conexionBD = new Sequelize(process.env.POSTGRES_URL, {
        dialect: 'postgres',
    });
    module.exports = conexionBD;
    return;
}
const conexionBD = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',

});

module.exports = conexionBD;
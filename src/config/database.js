require('dotenv').config();
const { Sequelize } = require('sequelize');

let conexionBD;

if (process.env.PRODUCTION === 'true') {
    conexionBD = new Sequelize(process.env.POSTGRES_URL, {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });
} else {
    conexionBD = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });
}

module.exports = conexionBD;
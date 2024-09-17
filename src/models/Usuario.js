const { DataTypes } = require("sequelize");
const conexionBD = require("../config/database");


const Usuario = conexionBD.define('Usuario', {
    usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull:false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    }
}, {tableName: 'usuarios', timestamps: false}
);

module.exports = Usuario;
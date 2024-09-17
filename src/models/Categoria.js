const { DataTypes } = require("sequelize");
const conexionBD = require("../config/database");

const Categoria = conexionBD.define('Categoria', {
  categoria_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {tableName: 'categorias', timestamps:false}
);

module.exports = Categoria;
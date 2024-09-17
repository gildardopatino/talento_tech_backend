const { DataTypes } = require("sequelize");
const conexionBD = require("../config/database");
const Categoria = require("./Categoria")

const Producto = conexionBD.define('Producto', {
  producto_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categoria,
      key: 'categoria_id'
    }
  }
}, {tableName: 'productos', timestamps: false})

Producto.belongsTo(Categoria, {
  foreignKey: 'categoria_id',
  as: 'categoria'
})

module.exports = Producto
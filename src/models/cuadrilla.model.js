import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

export const Cuadrilla = sequelize.define("cuadrilla", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  codigo: { type: DataTypes.STRING, allowNull: false },
  nombre: { type: DataTypes.STRING, allowNull: false },
  telefono: { type: DataTypes.STRING },
  costoPorKilo: { type: DataTypes.FLOAT, allowNull: false },
  zona: { type: DataTypes.STRING },
})

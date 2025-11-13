import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

export const Clasificacion = sequelize.define("clasificacion", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  codigo: { type: DataTypes.STRING, allowNull: false },
  clasificacion: { type: DataTypes.STRING, allowNull: false },
  gramaje: { type: DataTypes.STRING },
})

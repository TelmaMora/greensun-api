import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

export const Pallet = sequelize.define("pallet", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  codigo: { type: DataTypes.STRING, allowNull: false },
  caja: { type: DataTypes.STRING, allowNull: false },
  cantidadCajas: { type: DataTypes.INTEGER, allowNull: false },
})

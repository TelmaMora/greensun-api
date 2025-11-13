import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

export const Caja = sequelize.define("caja", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  codigo: { type: DataTypes.STRING, allowNull: false },
  tipo: { type: DataTypes.STRING, allowNull: false },
  kilos_por_caja: { type: DataTypes.FLOAT, allowNull: false },
})

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

export const Proveedor = sequelize.define("proveedor", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  codigo: { type: DataTypes.STRING, allowNull: false, unique: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  telefono: { type: DataTypes.STRING },
  zona: { type: DataTypes.STRING },
  tipo: { type: DataTypes.STRING },
  documentacion: { type: DataTypes.STRING },
  extension: { type: DataTypes.STRING },
})

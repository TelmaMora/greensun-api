import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

export const Cliente = sequelize.define("cliente", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  razon_social: { type: DataTypes.STRING, allowNull: false },
  rfc: { type: DataTypes.STRING },
  documentacion: { type: DataTypes.STRING },
  programas: { type: DataTypes.STRING },
  correo: { type: DataTypes.STRING },
  telefono: { type: DataTypes.STRING },
})

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

export const Transporte = sequelize.define("transporte", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  codigo: { type: DataTypes.STRING, allowNull: false, unique: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  transportesDisponibles: { type: DataTypes.INTEGER, allowNull: false }, // cantidad de unidades
  numero: { type: DataTypes.STRING, allowNull: false }, // puede ser teléfono o número de contacto
  constancia: { type: DataTypes.STRING, allowNull: true }, // archivo o número de registro
})

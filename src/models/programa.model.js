import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

export const Programa = sequelize.define("programa", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  tipoEmpaque: { type: DataTypes.STRING, allowNull: false },
  kilosPorCaja: { type: DataTypes.FLOAT, allowNull: false },
  gramajeMin: { type: DataTypes.FLOAT, allowNull: false },
  gramajeMax: { type: DataTypes.FLOAT, allowNull: false },
})

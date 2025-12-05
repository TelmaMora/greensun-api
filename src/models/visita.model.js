import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"
import Proveedor from "./proveedor.model.js"

export const Visita = sequelize.define("visita", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  fecha: { type: DataTypes.DATEONLY, allowNull: false },
  tipo_fruta: { type: DataTypes.STRING, allowNull: false },
  encargado: { type: DataTypes.STRING },
  viaticos: { type: DataTypes.FLOAT },
  costo_kg: { type: DataTypes.FLOAT },
  ubicacion_huerta: { type: DataTypes.STRING },
  huerta: { type: DataTypes.STRING },
  tipo_corte: { type: DataTypes.STRING },
  volumen_calculado: { type: DataTypes.FLOAT },
  porcentajes: { type: DataTypes.STRING },
  observaciones: { type: DataTypes.TEXT },
})

// 🔗 Relación con proveedor
Visita.belongsTo(Proveedor, {
  foreignKey: "codigo_proveedor",
  targetKey: "codigo",
  as: "proveedor_relacionado",
})

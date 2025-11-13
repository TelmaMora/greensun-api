// models/corteProgramado.model.js
import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"
import { Visita } from "./visita.model.js"
import { Cuadrilla } from "./cuadrilla.model.js"
import { Transporte } from "./transporte.model.js"

export const CorteProgramado = sequelize.define("corte_programado", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  fecha_corte: { type: DataTypes.DATEONLY, allowNull: false },
  costo_corte: { type: DataTypes.FLOAT },
  costo_transporte: { type: DataTypes.FLOAT },
  tipo_fruta: { type: DataTypes.STRING },
  costo_kg: { type: DataTypes.FLOAT },
  codigo_proveedor: { type: DataTypes.INTEGER },
  proveedor: { type: DataTypes.STRING },
  ubicacion_huerta: { type: DataTypes.STRING },
  huerta: { type: DataTypes.STRING },
  tipo_corte: { type: DataTypes.STRING },
  encargado: { type: DataTypes.STRING },
  observaciones: { type: DataTypes.TEXT },
})

// 🔗 Relaciones
Visita.hasMany(CorteProgramado, { foreignKey: "visita_id" })
CorteProgramado.belongsTo(Visita, { foreignKey: "visita_id" })

Cuadrilla.hasMany(CorteProgramado, { foreignKey: "cuadrilla_id" })
CorteProgramado.belongsTo(Cuadrilla, { foreignKey: "cuadrilla_id" })

Transporte.hasMany(CorteProgramado, { foreignKey: "transporte_id" })
CorteProgramado.belongsTo(Transporte, { foreignKey: "transporte_id" })

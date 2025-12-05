import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const PrestamoCaja = sequelize.define("prestamo_caja", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  fecha_prestamo: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },

  responsable_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  proveedor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  numero_cajas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  caja_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})
export default PrestamoCaja
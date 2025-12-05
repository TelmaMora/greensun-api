import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const SeleccionDetalle = sequelize.define(
  "seleccion_detalle",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

    cajas_por_pallet: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    cajas_sueltas: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    kilos_por_caja: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    total_kilos: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "seleccion_detalles",
    underscored: true,
  }
)

export default SeleccionDetalle

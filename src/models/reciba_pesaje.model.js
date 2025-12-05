import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const RecibaPesaje = sequelize.define(
  "reciba_pesaje",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    kilos_brutos: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    numero_cajas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    peso_tarima: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    // ✅ NUEVO
    tipo_caja: {
      type: DataTypes.STRING, // LISA | COSTILLA
      allowNull: false,
    },
  },
  {
    tableName: "reciba_pesajes",
    underscored: true,
  }
)

export default RecibaPesaje

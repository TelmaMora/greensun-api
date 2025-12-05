import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const Reciba = sequelize.define(
  "reciba",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

    fecha_ingreso: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

    hora_recibo: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

    tipo_fruta: {
      type: DataTypes.ENUM("Loca", "Aventajado", "Negro"),
      allowNull: false,
    },

    folio_ingreso: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    acopio: {
      type: DataTypes.STRING,
    },

    verificacion_candado: {
      type: DataTypes.STRING,
    },

    observaciones: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "recibas",
    underscored: true,
  }
)

export default Reciba

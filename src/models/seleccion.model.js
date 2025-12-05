import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const Seleccion = sequelize.define(
  "seleccion",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

    folio: { type: DataTypes.STRING, allowNull: false },

    hora_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    hora_fin: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "selecciones",
    underscored: true,
  }
)

export default Seleccion

import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Cliente } from "./cliente.model.js";
import { Clasificacion } from "./clasificacion.model.js";

export const Pedido = sequelize.define(
  "Pedido",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "clientes", key: "id" }
    },

    clasificacion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "clasificaciones", key: "id" }
    },

    numero_embarque: { type: DataTypes.STRING, allowNull: false },
    fecha: { type: DataTypes.DATEONLY, allowNull: false },
    cajas: { type: DataTypes.INTEGER, defaultValue: 0 },
    kilos: { type: DataTypes.FLOAT, defaultValue: 0 },
    tipo_caja: { type: DataTypes.STRING, allowNull: false },
    pallets: { type: DataTypes.INTEGER, defaultValue: 0 }
  },
  {
    tableName: "pedidos",
    underscored: true,
    paranoid: true,
  }
);

// RELACIONES
Pedido.belongsTo(Cliente, { foreignKey: "cliente_id" });
Pedido.belongsTo(Clasificacion, { foreignKey: "clasificacion_id" });

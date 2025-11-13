import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Pedido = sequelize.define(
  "Pedido",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero_embarque: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clasificacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    cajas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    kilos: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    tipo_caja: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pallets: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "pedidos",
    timestamps: true,
    paranoid: true,
    underscored: true, // convierte createdAt -> created_at
  }
);

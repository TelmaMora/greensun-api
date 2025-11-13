import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Usuario = sequelize.define(
  "Usuario",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     rol: {
      type: DataTypes.STRING,      // ⚡ aquí usamos STRING en lugar de ENUM
      defaultValue: "operador",    // valor por defecto
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "usuarios", // 👈 asegúrate de usar el mismo nombre que en SQL
    timestamps: true,      // agrega createdAt y updatedAt
    underscored: true,     // usa created_at en lugar de createdAt si prefieres ese formato
  }
);

export default Usuario;
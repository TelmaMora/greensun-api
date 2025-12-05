import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: false,
    /* dialectOptions: {
      ssl: {
        require: true,           // obligatorio para Render
        rejectUnauthorized: false // evita errores de certificado
      }
    }, */
  }
);

export const conectarDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos establecida correctamente");
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error);
  }
};

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { conectarDB, sequelize } from "./config/database.js";
import pedidosRoutes from "./routes/pedidos.routes.js";
import visitaRoutes from "./routes/visita.routes.js";
import corteRoutes from "./routes/corte_programado.routes.js";
import proveedorRoutes from "./routes/proveedor.routes.js";
import clienteRoutes from "./routes/cliente.routes.js"
import clasificacionRoutes from "./routes/clasificacion.routes.js"
import cajaRoutes from "./routes/caja.routes.js"
import cuadrillaRoutes from "./routes/cuadrilla.routes.js"
import palletRoutes from "./routes/pallet.routes.js"
import programaRoutes from "./routes/programa.routes.js"
import transporteRoutes from "./routes/transporte.routes.js"
import usuarioRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/pedidos", pedidosRoutes);
app.use("/api/visitas", visitaRoutes);
app.use("/api/cortes", corteRoutes)
app.use("/api/proveedores", proveedorRoutes)
app.use("/api/clientes", clienteRoutes)
app.use("/api/clasificaciones", clasificacionRoutes)
app.use("/api/cajas", cajaRoutes)
app.use("/api/cuadrillas", cuadrillaRoutes)
app.use("/api/pallets", palletRoutes)
app.use("/api/programas", programaRoutes)
app.use("/api/transportes", transporteRoutes)
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/auth", authRoutes)



app.listen(PORT, async () => {
  await conectarDB();
  await sequelize.sync({ alter: true });
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

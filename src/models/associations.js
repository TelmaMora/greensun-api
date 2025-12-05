import PrestamoCaja from "./prestamo_caja.model.js"
import Proveedor from "./proveedor.model.js"
import Caja from "./caja.model.js"
import Usuario from "./users.model.js"
import Reciba from "./reciba.model.js"
import RecibaPesaje from "./reciba_pesaje.model.js"

import Seleccion from "./seleccion.model.js"
import SeleccionDetalle from "./seleccion_detalle.model.js"
import { Clasificacion } from "./clasificacion.model.js"
import { Cliente } from "./cliente.model.js"

Seleccion.belongsTo(Reciba, { as: "reciba", foreignKey: "reciba_id" })
Reciba.hasMany(Seleccion, { as: "selecciones", foreignKey: "reciba_id" })

Seleccion.hasMany(SeleccionDetalle, { as: "detalles", foreignKey: "seleccion_id" })
SeleccionDetalle.belongsTo(Seleccion, { foreignKey: "seleccion_id" })

SeleccionDetalle.belongsTo(Clasificacion, {
  as: "clasificacion",
  foreignKey: "clasificacion_id",
})

SeleccionDetalle.belongsTo(Cliente, {
  as: "cliente",
  foreignKey: "cliente_id",
})


/* =========================
   PRESTAMO CAJAS
========================= */

// ✅ Responsable (Usuario)
PrestamoCaja.belongsTo(Usuario, {
  foreignKey: "responsable_id",
  as: "responsable",
})

Usuario.hasMany(PrestamoCaja, {
  foreignKey: "responsable_id",
  as: "prestamos_cajas",
})

// ✅ Proveedor
PrestamoCaja.belongsTo(Proveedor, {
  foreignKey: "proveedor_id",
  as: "proveedor",
})

Proveedor.hasMany(PrestamoCaja, {
  foreignKey: "proveedor_id",
  as: "prestamos_cajas",
})

// ✅ Caja
PrestamoCaja.belongsTo(Caja, {
  foreignKey: "caja_id",
  as: "caja",
})

Caja.hasMany(PrestamoCaja, {
  foreignKey: "caja_id",
  as: "prestamos_cajas",
})


Reciba.belongsTo(Proveedor, { foreignKey: "proveedor_id", as: "proveedor" })
Proveedor.hasMany(Reciba, { foreignKey: "proveedor_id" })

Reciba.belongsTo(Usuario, { foreignKey: "recepcionista_id", as: "recepcionista" })
Usuario.hasMany(Reciba, { foreignKey: "recepcionista_id" })

Reciba.hasMany(RecibaPesaje, { foreignKey: "reciba_id", as: "pesajes" })
RecibaPesaje.belongsTo(Reciba, { foreignKey: "reciba_id" })
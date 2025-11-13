import Proveedor from "./Proveedor.js";
import Visita from "./Visita.js";
import Programacion from "./Programacion.js";
import Corte from "./Corte.js";

Proveedor.hasMany(Visita, { foreignKey: "proveedor_id" });
Visita.belongsTo(Proveedor);

Proveedor.hasMany(Programacion, { foreignKey: "proveedor_id" });
Programacion.belongsTo(Proveedor);

Programacion.hasMany(Corte, { foreignKey: "programacion_id" });
Corte.belongsTo(Programacion);

export {
  Proveedor,
  Visita,
  Programacion,
  Corte,
};

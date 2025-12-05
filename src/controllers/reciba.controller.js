import Reciba from "../models/reciba.model.js"
import RecibaPesaje from "../models/reciba_pesaje.model.js"
import Proveedor from "../models/proveedor.model.js"
import Usuario from "../models/users.model.js"

export const getRecibas = async (req, res) => {
  const data = await Reciba.findAll({
    include: [
      { model: Proveedor, as: "proveedor" },
      { model: Usuario, as: "recepcionista", attributes: ["id", "nombre"] },
      { model: RecibaPesaje, as: "pesajes" },
    ],
    order: [["id", "DESC"]],
  })

  res.json(data)
}


export const createReciba = async (req, res) => {
  const {
    tipo_fruta,
    folio_ingreso,
    proveedor_id,
    acopio,
    recepcionista_id,
    verificacion_candado,
    observaciones,
    pesajes,
  } = req.body

  const reciba = await Reciba.create(
    {
      tipo_fruta,
      folio_ingreso,
      proveedor_id,
      acopio,
      recepcionista_id,
      verificacion_candado,
      observaciones,
      pesajes: pesajes.map((p) => ({
        kilos_brutos: p.kilos_brutos,
        numero_cajas: p.numero_cajas,
        peso_tarima: p.peso_tarima,
        tipo_caja: p.tipo_caja, // ✅ AQUÍ ESTABA EL PROBLEMA
      })),
    },
    {
      include: [{ model: RecibaPesaje, as: "pesajes" }],
    }
  )

  res.status(201).json(reciba)
}


import Seleccion from "../models/seleccion.model.js"
import SeleccionDetalle from "../models/seleccion_detalle.model.js"
import Reciba from "../models/reciba.model.js"
import { Clasificacion } from "../models/clasificacion.model.js"
import { Cliente } from "../models/cliente.model.js"

export const getSelecciones = async (req, res) => {
  const data = await Seleccion.findAll({
    include: [
      { model: Reciba, as: "reciba" },
      {
        model: SeleccionDetalle,
        as: "detalles",
        include: [
          { model: Clasificacion, as: "clasificacion" },
          { model: Cliente, as: "cliente" },
        ],
      },
    ],
    order: [["id", "DESC"]],
  })

  res.json(data)
}

export const createSeleccion = async (req, res) => {
  const { reciba_id, folio, detalles } = req.body

  const seleccion = await Seleccion.create(
    {
      reciba_id,
      folio,
      detalles,
    },
    {
      include: [{ model: SeleccionDetalle, as: "detalles" }],
    }
  )

  res.status(201).json(seleccion)
}

export const finalizarSeleccion = async (req, res) => {
  await Seleccion.update(
    { hora_fin: new Date() },
    { where: { id: req.params.id } }
  )

  res.sendStatus(200)
}

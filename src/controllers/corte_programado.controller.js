import { CorteProgramado } from "../models/corte_programado.model.js"
import { Visita } from "../models/visita.model.js"

export const getCortes = async (req, res) => {
  const cortes = await CorteProgramado.findAll({
    include: [{ model: Visita, attributes: ["id", "encargado", "fecha", "huerta"] }],
  })
  res.json(cortes)
}

export const createCorte = async (req, res) => {
  const corte = await CorteProgramado.create(req.body)
  res.status(201).json(corte)
}

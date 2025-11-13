import { Visita } from "../models/visita.model.js"
import { Proveedor } from "../models/proveedor.model.js"

export const getVisitas = async (req, res) => {
  try {
    const visitas = await Visita.findAll({
      include: [
        {
          model: Proveedor,
          as: "proveedor_relacionado",
          attributes: ["codigo", "nombre"],
        },
      ],
    })
    res.json(visitas)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createVisita = async (req, res) => {
  try {
    const { codigo_proveedor } = req.body

    // Buscar proveedor para completar el nombre
    const proveedor = await Proveedor.findOne({ where: { codigo: codigo_proveedor } })
    if (!proveedor) return res.status(404).json({ error: "Proveedor no encontrado" })

    const visita = await Visita.create({
      ...req.body,
      proveedor: proveedor.nombre,
    })

    res.status(201).json(visita)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

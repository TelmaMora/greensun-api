import { Clasificacion } from "../models/clasificacion.model.js"

// 📥 Obtener todas las clasificaciones
export const getClasificaciones = async (req, res) => {
  const clasificaciones = await Clasificacion.findAll()
  res.json(clasificaciones)
}

// ➕ Crear nueva clasificación
export const createClasificacion = async (req, res) => {
  const clasificacion = await Clasificacion.create(req.body)
  res.status(201).json(clasificacion)
}

// ✏️ Actualizar clasificación
export const updateClasificacion = async (req, res) => {
  const { id } = req.params
  const clasificacion = await Clasificacion.findByPk(id)
  if (!clasificacion) return res.status(404).json({ message: "Clasificación no encontrada" })
  await clasificacion.update(req.body)
  res.json(clasificacion)
}

// 🗑️ Eliminar clasificación
export const deleteClasificacion = async (req, res) => {
  const { id } = req.params
  const clasificacion = await Clasificacion.findByPk(id)
  if (!clasificacion) return res.status(404).json({ message: "Clasificación no encontrada" })
  await clasificacion.destroy()
  res.json({ message: "Clasificación eliminada" })
}

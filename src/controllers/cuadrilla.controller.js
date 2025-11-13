import { Cuadrilla } from "../models/cuadrilla.model.js"

// 📋 Obtener todas las cuadrillas
export const getCuadrillas = async (req, res) => {
  const cuadrillas = await Cuadrilla.findAll()
  res.json(cuadrillas)
}

// ➕ Crear una nueva cuadrilla
export const createCuadrilla = async (req, res) => {
  const cuadrilla = await Cuadrilla.create(req.body)
  res.status(201).json(cuadrilla)
}

// ✏️ Actualizar cuadrilla
export const updateCuadrilla = async (req, res) => {
  const { id } = req.params
  const cuadrilla = await Cuadrilla.findByPk(id)
  if (!cuadrilla) return res.status(404).json({ message: "Cuadrilla no encontrada" })
  await cuadrilla.update(req.body)
  res.json(cuadrilla)
}

// 🗑️ Eliminar cuadrilla
export const deleteCuadrilla = async (req, res) => {
  const { id } = req.params
  const cuadrilla = await Cuadrilla.findByPk(id)
  if (!cuadrilla) return res.status(404).json({ message: "Cuadrilla no encontrada" })
  await cuadrilla.destroy()
  res.json({ message: "Cuadrilla eliminada correctamente" })
}

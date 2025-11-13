import { Caja } from "../models/caja.model.js"

// 📥 Obtener todas las cajas
export const getCajas = async (req, res) => {
  const cajas = await Caja.findAll()
  res.json(cajas)
}

// ➕ Crear nueva caja
export const createCaja = async (req, res) => {
  const caja = await Caja.create(req.body)
  res.status(201).json(caja)
}

// ✏️ Actualizar caja existente
export const updateCaja = async (req, res) => {
  const { id } = req.params
  const caja = await Caja.findByPk(id)
  if (!caja) return res.status(404).json({ message: "Caja no encontrada" })
  await caja.update(req.body)
  res.json(caja)
}

// 🗑️ Eliminar caja
export const deleteCaja = async (req, res) => {
  const { id } = req.params
  const caja = await Caja.findByPk(id)
  if (!caja) return res.status(404).json({ message: "Caja no encontrada" })
  await caja.destroy()
  res.json({ message: "Caja eliminada" })
}

import { Transporte } from "../models/transporte.model.js"

// 📋 Obtener todos los transportes
export const getTransportes = async (req, res) => {
  const transportes = await Transporte.findAll()
  res.json(transportes)
}

// ➕ Crear transporte
export const createTransporte = async (req, res) => {
  try {
    const transporte = await Transporte.create(req.body)
    res.status(201).json(transporte)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// ✏️ Actualizar transporte
export const updateTransporte = async (req, res) => {
  const { id } = req.params
  const transporte = await Transporte.findByPk(id)
  if (!transporte) return res.status(404).json({ message: "Transporte no encontrado" })
  await transporte.update(req.body)
  res.json(transporte)
}

// 🗑️ Eliminar transporte
export const deleteTransporte = async (req, res) => {
  const { id } = req.params
  const transporte = await Transporte.findByPk(id)
  if (!transporte) return res.status(404).json({ message: "Transporte no encontrado" })
  await transporte.destroy()
  res.json({ message: "Transporte eliminado correctamente" })
}

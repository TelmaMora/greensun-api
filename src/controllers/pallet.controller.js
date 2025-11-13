import { Pallet } from "../models/pallet.model.js"

// 📋 Obtener todos los pallets
export const getPallets = async (req, res) => {
  const pallets = await Pallet.findAll()
  res.json(pallets)
}

// ➕ Crear pallet
export const createPallet = async (req, res) => {
  const pallet = await Pallet.create(req.body)
  res.status(201).json(pallet)
}

// ✏️ Actualizar pallet
export const updatePallet = async (req, res) => {
  const { id } = req.params
  const pallet = await Pallet.findByPk(id)
  if (!pallet) return res.status(404).json({ message: "Pallet no encontrado" })
  await pallet.update(req.body)
  res.json(pallet)
}

// 🗑️ Eliminar pallet
export const deletePallet = async (req, res) => {
  const { id } = req.params
  const pallet = await Pallet.findByPk(id)
  if (!pallet) return res.status(404).json({ message: "Pallet no encontrado" })
  await pallet.destroy()
  res.json({ message: "Pallet eliminado correctamente" })
}

import { Programa } from "../models/programa.model.js"

// 📋 Obtener todos los programas
export const getProgramas = async (req, res) => {
  const programas = await Programa.findAll()
  res.json(programas)
}

// ➕ Crear programa
export const createPrograma = async (req, res) => {
  const programa = await Programa.create(req.body)
  res.status(201).json(programa)
}

// ✏️ Actualizar programa
export const updatePrograma = async (req, res) => {
  const { id } = req.params
  const programa = await Programa.findByPk(id)
  if (!programa) return res.status(404).json({ message: "Programa no encontrado" })
  await programa.update(req.body)
  res.json(programa)
}

// 🗑️ Eliminar programa
export const deletePrograma = async (req, res) => {
  const { id } = req.params
  const programa = await Programa.findByPk(id)
  if (!programa) return res.status(404).json({ message: "Programa no encontrado" })
  await programa.destroy()
  res.json({ message: "Programa eliminado correctamente" })
}

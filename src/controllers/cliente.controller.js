import { Cliente } from "../models/cliente.model.js"

// 📥 Obtener todos
export const getClientes = async (req, res) => {
  const clientes = await Cliente.findAll()
  res.json(clientes)
}

// ➕ Crear nuevo
export const createCliente = async (req, res) => {
  const cliente = await Cliente.create(req.body)
  res.status(201).json(cliente)
}

// ✏️ Actualizar
export const updateCliente = async (req, res) => {
  const { id } = req.params
  const cliente = await Cliente.findByPk(id)
  if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" })
  await cliente.update(req.body)
  res.json(cliente)
}

// 🗑️ Eliminar
export const deleteCliente = async (req, res) => {
  const { id } = req.params
  const cliente = await Cliente.findByPk(id)
  if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" })
  await cliente.destroy()
  res.json({ message: "Cliente eliminado" })
}

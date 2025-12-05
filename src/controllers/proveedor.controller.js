import Proveedor from "../models/proveedor.model.js"

// 📥 Obtener todos
export const getProveedores = async (req, res) => {
  const proveedores = await Proveedor.findAll()
  res.json(proveedores)
}

// ➕ Crear nuevo
export const createProveedor = async (req, res) => {
  const proveedor = await Proveedor.create(req.body)
  res.status(201).json(proveedor)
}

// ✏️ Actualizar
export const updateProveedor = async (req, res) => {
  const { id } = req.params
  const proveedor = await Proveedor.findByPk(id)
  if (!proveedor) return res.status(404).json({ message: "Proveedor no encontrado" })
  await proveedor.update(req.body)
  res.json(proveedor)
}

// 🗑️ Eliminar
export const deleteProveedor = async (req, res) => {
  const { id } = req.params
  const proveedor = await Proveedor.findByPk(id)
  if (!proveedor) return res.status(404).json({ message: "Proveedor no encontrado" })
  await proveedor.destroy()
  res.json({ message: "Proveedor eliminado" })
}

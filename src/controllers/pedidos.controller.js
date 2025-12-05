import { Pedido } from "../models/pedido.model.js";
import { Cliente } from "../models/cliente.model.js";
import { Clasificacion } from "../models/clasificacion.model.js";

// 📄 Obtener todos los pedidos
export const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener pedidos", error });
  }
};

// ➕ Crear un pedido
export const crearPedido = async (req, res) => {
  try {
    const { cliente_id, clasificacion_id } = req.body;

    const cliente = await Cliente.findByPk(cliente_id);
    if (!cliente) return res.status(400).json({ error: "Cliente no existe" });

    const clasificacion = await Clasificacion.findByPk(clasificacion_id);
    if (!clasificacion) return res.status(400).json({ error: "Clasificación no existe" });

    const pedido = await Pedido.create(req.body);
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ message: "Error al crear pedido", error });
  }
};


// ✏️ Actualizar un pedido
export const actualizarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });

    await pedido.update(req.body);
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar pedido", error });
  }
};

// ❌ Eliminar un pedido
export const eliminarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });

    await pedido.destroy();
    res.json({ message: "Pedido eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar pedido", error });
  }
};

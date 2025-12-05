import PrestamoCaja from "../models/prestamo_caja.model.js"
import Caja from "../models/caja.model.js"
import Proveedor from "../models/proveedor.model.js"
import Usuario from "../models/users.model.js"

export const getPrestamos = async (req, res) => {
  const data = await PrestamoCaja.findAll({
    include: [
      {
        model: Usuario,
        as: "responsable",
        attributes: ["id", "nombre"],
      },
      {
        model: Proveedor,
        as: "proveedor",
        attributes: ["id", "nombre"],
      },
      {
        model: Caja,
        as: "caja",
        attributes: ["id", "codigo", "tipo"],
      },
    ],
  })

  res.json(
    data.map((p) => ({
      id: p.id,
      fecha_prestamo: p.fecha_prestamo,
      responsable: p.responsable?.nombre,
      proveedor: p.proveedor?.nombre,
      numero_cajas: p.numero_cajas,
      tipo_caja: `${p.caja?.codigo} - ${p.caja?.tipo}`,
    }))
  )
}


export const createPrestamo = async (req, res) => {
  const prestamo = await PrestamoCaja.create(req.body)
  res.status(201).json(prestamo)
}

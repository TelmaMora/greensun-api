import PDFDocument from "pdfkit"
import PrestamoCaja from "../models/prestamo_caja.model.js"
import Proveedor from "../models/proveedor.model.js"
import Caja from "../models/caja.model.js"
import Usuario from "../models/users.model.js"

export const imprimirPrestamo = async (req, res) => {
  const prestamo = await PrestamoCaja.findByPk(req.params.id, {
    include: [
      { model: Usuario, as: "responsable" },
      { model: Proveedor, as: "proveedor" },
      { model: Caja, as: "caja" },
    ],
  })

  if (!prestamo) {
    return res.status(404).json({ message: "Préstamo no encontrado" })
  }

  const doc = new PDFDocument({ margin: 50 })

  res.setHeader("Content-Type", "application/pdf")
  res.setHeader(
    "Content-Disposition",
    `inline; filename=prestamo_${prestamo.id}.pdf`
  )

  doc.pipe(res)

  doc.fontSize(16).text("PRÉSTAMO DE CAJAS", { align: "center" })
  doc.moveDown(2)

  doc.fontSize(12)
  doc.text(`Fecha de préstamo: ${prestamo.fecha_prestamo.toISOString().split("T")[0]}`)
  doc.text(`Responsable: ${prestamo.responsable?.nombre ?? "-"}`)
  doc.text(`Proveedor: ${prestamo.proveedor?.nombre ?? "-"}`)
  doc.text(`Número de cajas: ${prestamo.numero_cajas}`)
  doc.text(`Tipo de caja: ${prestamo.caja?.codigo} - ${prestamo.caja?.tipo}`)

  doc.moveDown(4)
  doc.text("Firma proveedor:", { continued: true })
  doc.text(" _______________________________")

  doc.end()
}

import express from "express"
import {
  getPrestamos,
  createPrestamo,
} from "../controllers/prestamo_caja.controller.js"
import { imprimirPrestamo } from "../utils/nota_prestamo.js"

const router = express.Router()

router.get("/", getPrestamos)
router.post("/", createPrestamo)
router.get("/:id/pdf", imprimirPrestamo)

export default router

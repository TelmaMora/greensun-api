import express from "express"
import {
  getSelecciones,
  createSeleccion,
  finalizarSeleccion,
} from "../controllers/seleccion.controller.js"

const router = express.Router()

router.get("/", getSelecciones)
router.post("/", createSeleccion)
router.put("/:id/finalizar", finalizarSeleccion)

export default router

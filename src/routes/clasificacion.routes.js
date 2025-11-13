import express from "express"
import {
  getClasificaciones,
  createClasificacion,
  updateClasificacion,
  deleteClasificacion,
} from "../controllers/clasificacion.controller.js"

const router = express.Router()

router.get("/", getClasificaciones)
router.post("/", createClasificacion)
router.put("/:id", updateClasificacion)
router.delete("/:id", deleteClasificacion)

export default router

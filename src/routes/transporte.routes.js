import express from "express"
import {
  getTransportes,
  createTransporte,
  updateTransporte,
  deleteTransporte,
} from "../controllers/transporte.controller.js"

const router = express.Router()

router.get("/", getTransportes)
router.post("/", createTransporte)
router.put("/:id", updateTransporte)
router.delete("/:id", deleteTransporte)

export default router

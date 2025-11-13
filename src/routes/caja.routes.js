import express from "express"
import {
  getCajas,
  createCaja,
  updateCaja,
  deleteCaja,
} from "../controllers/caja.controller.js"

const router = express.Router()

router.get("/", getCajas)
router.post("/", createCaja)
router.put("/:id", updateCaja)
router.delete("/:id", deleteCaja)

export default router

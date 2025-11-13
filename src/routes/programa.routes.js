import express from "express"
import {
  getProgramas,
  createPrograma,
  updatePrograma,
  deletePrograma,
} from "../controllers/programa.controller.js"

const router = express.Router()

router.get("/", getProgramas)
router.post("/", createPrograma)
router.put("/:id", updatePrograma)
router.delete("/:id", deletePrograma)

export default router

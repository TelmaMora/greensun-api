import express from "express"
import {
  getCuadrillas,
  createCuadrilla,
  updateCuadrilla,
  deleteCuadrilla,
} from "../controllers/cuadrilla.controller.js"

const router = express.Router()

router.get("/", getCuadrillas)
router.post("/", createCuadrilla)
router.put("/:id", updateCuadrilla)
router.delete("/:id", deleteCuadrilla)

export default router

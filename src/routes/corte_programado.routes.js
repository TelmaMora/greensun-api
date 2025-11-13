import express from "express"
import { getCortes, createCorte } from "../controllers/corte_programado.controller.js"
const router = express.Router()

router.get("/", getCortes)
router.post("/", createCorte)

export default router

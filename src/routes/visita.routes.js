import express from "express"
import { getVisitas, createVisita } from "../controllers/visita.controller.js"
const router = express.Router()

router.get("/", getVisitas)
router.post("/", createVisita)

export default router

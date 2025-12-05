import { Router } from "express"
import { getRecibas, createReciba } from "../controllers/reciba.controller.js"

const router = Router()

router.get("/", getRecibas)
router.post("/", createReciba)

export default router

import express from "express"
import {
  getPallets,
  createPallet,
  updatePallet,
  deletePallet,
} from "../controllers/pallet.controller.js"

const router = express.Router()

router.get("/", getPallets)
router.post("/", createPallet)
router.put("/:id", updatePallet)
router.delete("/:id", deletePallet)

export default router

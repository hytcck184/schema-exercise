import express from "express"
import { getUserData, addUser } from "../controllers/userFunction.js"

const router = express.Router()

router.get("/user", getUserData)

router.post("/user/change", addUser)

export default router
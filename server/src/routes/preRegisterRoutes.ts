import express from "express";
import { createPreRegister } from "../controllers/preRegisterController";

const router = express.Router();

router.post("/pre-register", createPreRegister);

export default router;

import express from "express";
import { getCounter } from "../controllers/counterController";

const router = express.Router();

// Sadece GET route, public
router.get("/", getCounter);

export default router;

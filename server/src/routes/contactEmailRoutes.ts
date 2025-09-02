import express from "express";
import { contactEmail } from "../controllers/ContactEmail";

const router = express.Router();

router.post("/contact-message", contactEmail);

export default router;

import { sendGmail } from "../controllers/gmail.js";
import express from "express";

const router = express.Router();

router.post("/sendMail", sendGmail);

export default router;

import express from "express";
import { startConversation } from "../controller/AssistantController";

const router = express.Router();

router.post("/chat", startConversation);

export default router;

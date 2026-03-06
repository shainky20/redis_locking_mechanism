import express from "express";
import { acquireLock, releaseLock } from "../controllers/lock.controller.js";

const router = express.Router();

router.post("/acquire", acquireLock);
router.post("/release", releaseLock);

export default router;
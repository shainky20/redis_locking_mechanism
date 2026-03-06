import express from "express";
import { acquireLock } from "../controllers/lock.controller.js";

const router = express.Router();

router.get("/", acquireLock);

export default router;
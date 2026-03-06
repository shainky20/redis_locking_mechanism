import express from "express";
import lockRoutes from "./routes/lock.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
res.send("Redis project running");
});

app.use("/api/lock", lockRoutes);

export default app;

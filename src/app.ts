import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

// Controllers (route handlers)
import * as apiController from "./controllers/api";

const app = express();
app.set("port", process.env.PORT || 3000);

// API routes.
app.get("/api", apiController.getApi);

export default app;

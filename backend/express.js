import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5000", credentials: true }));

app.use("/", authRoutes);

export default app;

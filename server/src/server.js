import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoute.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || true,
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to DevOps Playground API"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK"
  });
});

const PORT = process.env.PORT || 5050;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected");

    app.listen(process.env.PORT || 5050, "0.0.0.0", () => {
      console.log("🚀 Server running");
    });

  } catch (error) {
    console.log(error);
  }
};

startServer();
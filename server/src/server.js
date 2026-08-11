import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";

dotenv.config();

const app = express();

app.use(cors());
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
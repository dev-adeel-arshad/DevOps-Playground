import { Router } from "express";
import User from "../models/User.js";

const router = Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/", async (req, res) => {
  const { name, email } = req.body;

  const user = await User.create({ name, email });

  res.status(201).json({
    message: "User added successfully",
    user
  });
});

export default router;
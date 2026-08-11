import { Router } from "express";

const router = Router();

let users = [
  {
    id: 1,
    name: "Adeel",
    email: "adeel@example.com"
  }
];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  const { name, email } = req.body;

  const user = {
    id: Date.now(),
    name,
    email
  };

  users.push(user);

  res.status(201).json({
    message: "User added successfully",
    user
  });
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  users = users.filter(user => user.id !== id);

  res.json({
    message: "User deleted successfully"
  });
});

export default router;
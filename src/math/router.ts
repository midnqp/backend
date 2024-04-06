import express from "express";
import service from "./service.js";

const router = express.Router();

router.post("/arith", async (req, res, next) => {
  const { type, a, b } = req.body;

  const result = await service.doArithmetic(type, { a, b });
  res.json({ result });
  next();
});

export default router;

import express from "express";
import math from "@/math/router.js";

const router = express.Router();
router.use("/maths", math);

export default router;

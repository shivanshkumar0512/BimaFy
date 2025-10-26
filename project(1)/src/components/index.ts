// src/routes/planRoutes.ts

import { Router, Request, Response } from "express";
import Plan from "../back/models/plan"; // Ensure Plan is typed


const router = Router();

// GET /plans
router.get("/", async (req: Request, res: Response) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: "Error fetching plans", error });
  }
});

export default router;
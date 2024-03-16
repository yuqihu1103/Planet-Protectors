// incrementRoute.js
import express from "express";
import TreesModel from "../models/trees.js";

const router = express.Router();

router.put("/increment", async (req, res) => {
  const result = await TreesModel.updateTreeValue();
  if (result === 1) {
    res.status(200).json({ message: "Tree value incremented successfully" });
  } else {
    res.status(404).json({ message: "Tree not found" });
  }
});

export default router;

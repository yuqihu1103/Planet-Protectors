// valueRoute.js
import express from "express";
import TreesModel from "../models/trees.js";

const router = express.Router();

router.get("/value", async (req, res) => {
  const value = await TreesModel.getTreeValue();
  if (value !== null) {
    res.status(200).json({ value });
  } else {
    res.status(404).json({ message: "Tree not found" });
  }
});

export default router;

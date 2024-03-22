import express from "express";
const router = express.Router();

router.get("/Teste", (_req, res) => {
  res.status(200).json({"deu": "bom"});
});

export default router;
import express from 'express';

const app = express();

app.use(express.json());

const router = express.Router();

router.get("/Teste", (_req, res) => {
  res.status(200).json({"deu": "bom"});
});

app.use(router);

export default app;
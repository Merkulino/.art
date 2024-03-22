import express from 'express';
import { comentarios, publicacoes, usuarios } from './routes';

const app = express();
app.use(express.json());

//Routes
app.use(publicacoes);
app.use(comentarios);
app.use(usuarios);

export default app;
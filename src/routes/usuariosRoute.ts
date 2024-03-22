import express from "express";
import UsuariosController from "../controllers/usuariosController";

const router = express.Router();

const userController = new UsuariosController();

// router.post("/Usuarios", UsuariosController);  // Cadastro

// router.get("/Usuarios", UsuariosController);  // login

// router.get("/Usuarios", UsuariosController); // buscar dados do usuario

router.get("/Usuarios", userController.getUser); // Buscar usuarios

// router.post("/Usuarios", UsuariosController); // Seguir usuario

//router.get("/Usuarios", UsuariosController);  // Recuperar senha

export default router;
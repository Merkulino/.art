import { Request, Response } from 'express';
import FirebaseInit from '../firebase/firebase';

class UsuariosController {
    
    // private _service: UsuariosService;

    // constructor(UsuariosService usuariosService) {
    //     this._service = usuariosService;
    // }

    async getUser(req: Request, res: Response) { 
        //const : number = req.body;
        //const result = await this._service.getUser();
        
        const fireInit = new FirebaseInit();
        fireInit.logarUsuario("teste@mail.com", "senha123");
        
        res.status(201).json({ message: "fireInit" });
      }

}

export default UsuariosController;
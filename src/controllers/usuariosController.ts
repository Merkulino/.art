import { Request, Response } from 'express';

class UsuariosController {
    
    // private _service: UsuariosService;

    // constructor(UsuariosService usuariosService) {
    //     this._service = usuariosService;
    // }

    async getUser(req: Request, res: Response) { 
        //const : number = req.body;
        //const result = await this._service.getUser();
        
        const result = "Teste";
        
        res.status(201).json({ message: result });
      }

}

export default UsuariosController;
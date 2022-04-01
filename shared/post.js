export class Post {

    _id;
    _nome;
    
    get getNome(){
        return this._nome;
    }

    set setNome(nome){
        this._nome = nome;
    }


}
import { ListaPost } from "../shared/list.js";

export class Post {

    _id;
    _categoria;   
    _conteudoTxt;
    _conteudoImg;

    lista = new ListaPost();

    constructor(elementHTML, conteudoTxt){

        this.setConteudoTxt = conteudoTxt;
        //this.setConteudoImg = conteudoImg

        this.lista.novaPostagem(elementHTML, conteudoTxt, ); 

    }
    

    get getID(){
        return this._id;
    }

    set setID(id){
        this._id = id;
    }

    get getCategoria(){
        return this._categoria;
    }

    set setCategoria(categoria){
        this._categoria = categoria;
    }

    get getConteudoTxt(){
        return this._conteudoTxt;
    }

    set setConteudoTxt(conteudoTxt){
        this._conteudoTxt = conteudoTxt;
    }

    get getConteudoImg(){
    return this._conteudoImg;
    }

    set setConteudoImg(conteudoImg){
        this._conteudoImg = conteudoImg;
    }


}
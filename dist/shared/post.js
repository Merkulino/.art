import { ListaPost } from "../shared/list.js";

export class Post {

    _id;
    _categoria;   
    _conteudoTxt;
    _conteudoImg;

    lista = new ListaPost();

    constructor(){}

    inserirImg(conteudoImg){

        const reader = new FileReader();
        conteudoImg.addEventListener("change", function (){

            //FileReader vai converter em uma data URL e add em um localStorage 
          
            reader.addEventListener("load", () => {
                localStorage.setItem('image', reader.result);
            });
            
            reader.readAsDataURL(this.files[0]);
          
          });

    }

    criarPost(elementHTML, conteudoTxt){

        this.setConteudoTxt = conteudoTxt;

        this.lista.novaPostagem(elementHTML, conteudoTxt); 

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
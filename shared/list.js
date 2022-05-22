import { GerarElemento } from "../element/GerarElemento.js";

//Cria um local de armazenamento e fazer verificação para armazenar
const localStorageTransaction = JSON.parse(
    localStorage.getItem('lista'));

    //Ta adicionando um elemento vazio, mudar isso  !!!!!
let lista = localStorage.getItem('lista') !== null ? 
    localStorageTransaction : [];

export class ListaPost {

    _novoElemento = new GerarElemento();
    _parentDiv;
    _img;

    constructor(){}

    //Verificar se contem post no JSON e ja criar elemento 
    verifyFeed(element){
        if(localStorageTransaction !== null){
            this.updateLocalStorage();
            this.showLista(element);
        }
    }

    getImg(){
        const imgLocal =  localStorage.getItem('image');
        this._img = imgLocal;
        console.log(imgLocal);
    }

    novaPostagem(element, _txt) {

        let _id = Math.floor(Date.now() * Math.random()).toString(36);

        this.getImg();
        let novoObjeto = {id: _id, txtPost: _txt, img: this._img};

        lista.unshift(novoObjeto);
        this.updateLocalStorage();

        this.paternDiv(element);
        this._novoElemento.gerarNovaPostagem(novoObjeto, this._parentDiv);
            
    }

    showLista(element){

        this.paternDiv(element);
        
        for(var i=0;i<lista.length;i++){
            this._novoElemento.gerarNovaPostagem(lista[i], this._parentDiv);
        }
    }

    paternDiv(element){

        const parentDiv = document.createElement("div");
        parentDiv.setAttribute('id', 'parentDivFeed');
        element.insertAdjacentElement('afterbegin', parentDiv);

        this._parentDiv = parentDiv;
    }
    
    //Atualizar lista armazenada
    updateLocalStorage = () => {
        localStorage.setItem('lista', JSON.stringify(lista));
    }
}
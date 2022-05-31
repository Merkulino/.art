import { GerarElemento } from "../element/GerarElemento.js";
import { CurrentUser } from "../userData/CurrentUser.js";

//Cria um local de armazenamento e fazer verificação para armazenar
const localStorageTransaction = JSON.parse(
    localStorage.getItem('lista'));

    //Ta adicionando um elemento vazio, mudar isso  !!!!!
let lista = localStorage.getItem('lista') !== null ? 
    localStorageTransaction : [];

var currentUser = new CurrentUser();

export class ListaPost {

    _novoElemento = new GerarElemento();
    _parentDiv;
    _userID = currentUser.getID;
    _img;

    constructor(){}

    //Verificar se contem post no JSON e ja criar elemento 
    verifyFeed(element, deletElement){
        if(localStorageTransaction !== null ){

            for(let i=0;i<lista.length; i++) {
            
                if(lista[i].userID == this._userID){
                    deletElement.parentNode.removeChild(deletElement);
        
                    this.updateLocalStorage();
                    this.showLista(element);
                    console.log('loop'+i)
                    break;
                }   
            }   
        }
    }

    getImg(){
        const imgLocal =  localStorage.getItem('image');
        this._img = imgLocal;
    }

    novaPostagem(element, _txt) {

        let _id = Math.floor(Date.now() * Math.random()).toString(36);
        //this.getCurrentUserID();
        this.getImg();

        let novoObjeto = {id: _id, userID: this._userID, txtPost: _txt, img: this._img};
        
        lista.unshift(novoObjeto);
        this.updateLocalStorage();

        this.paternDiv(element);
        this._novoElemento.gerarNovaPostagem(novoObjeto, this._parentDiv);

        localStorage.removeItem('image');
            
    }

    showLista(element){

        this.paternDiv(element);

       
        let arrayFiltrada = lista.filter(function(filtro){
            return filtro.userID == currentUser.getID;
        });

        //trocar essa lista do for pelo array que vai ser criado.
        for(var i=0;i<arrayFiltrada.length;i++){
            this._novoElemento.gerarNovaPostagem(arrayFiltrada[i], this._parentDiv);
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
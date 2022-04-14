
//Cria um local de armazenamento e fazer verificação para armazenar
const localStorageTransaction = JSON.parse(
    localStorage.getItem('lista'));

    //Ta adicionando um elemento vazio, mudar isso  !!!!!
let lista = localStorage.getItem('lista') !== null ? 
    localStorageTransaction : [];

export class ListaPost {

    _img;

    constructor(){    }

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
        let novoObjeto = {id: _id, nome: _txt, img: this._img};

        lista.unshift(novoObjeto);
        this.updateLocalStorage();

        for(var i=0;i<lista.length;i++){
        console.log(lista[i]);
        }

        const newDiv = document.createElement("div");
        newDiv.setAttribute('id', 'listItem');
        const para = document.createElement("p");
        const imgElemnt = document.createElement("img");
        imgElemnt.setAttribute('src', novoObjeto.img);
        para.innerText = novoObjeto.nome;

        newDiv.appendChild(imgElemnt);
        newDiv.insertBefore(para, newDiv.firstChild);
        element.insertBefore(newDiv, element.firstChild);
            
    }

    showLista(element){

       //Dar uma refatorada nessa criação de elemento    !!!!!!
        const parentDiv = document.createElement("div");
        parentDiv.setAttribute('id', 'parentDivFeed');
        element.appendChild(parentDiv);
        
        for(var i=0;i<lista.length;i++){

            const newDiv = document.createElement("div");
            newDiv.setAttribute('id', 'listItem');
            const para = document.createElement("p");
            const imgElemnt = document.createElement("img");
            
            imgElemnt.setAttribute('src', lista[i].img);  
            imgElemnt.setAttribute('id', 'imgFeed');  
            para.innerText = lista[i].nome;


            newDiv.appendChild(imgElemnt);
            newDiv.insertBefore(para, newDiv.firstChild);
            parentDiv.appendChild(newDiv);
            
        }
    }
    
    //Atualizar lista armazenada
    updateLocalStorage = () => {
        localStorage.setItem('lista', JSON.stringify(lista));
    }

}
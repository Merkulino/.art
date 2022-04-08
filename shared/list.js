
//Criar um local de armazenamento e fazer verificação para armazenar
const localStorageTransaction = JSON.parse(
    localStorage.getItem('lista'));

let lista = localStorage.getItem('lista') !== null ? 
    localStorageTransaction : [];

export class ListaPost{

    constructor(){}

    //Verificar se contem post no JSON e ja criar elemento 
    verifyFeed(element){

        if(localStorageTransaction !== null){
            this.updateLocalStorage();
            this.showLista(element);
        }
        
    }

    novaPostagem(element, _txt) {

        let _id = Math.floor(Date.now() * Math.random()).toString(36);

        let novoObjeto = {id: _id, nome: _txt};

        lista.unshift(novoObjeto);

        this.updateLocalStorage();

        for(var i=0;i<lista.length;i++){
        console.log(lista[i]);
        }

            const newDiv = document.createElement("div");
            newDiv.setAttribute('id', 'listItem');
            const para = document.createElement("p");
            para.innerText = novoObjeto.nome;

            newDiv.appendChild(para);
            element.insertBefore(newDiv, element.firstChild);
            
    }

    showLista(element){

       //Dar uma refatorada nessa criação de elemento
        const parentDiv = document.createElement("div");
        parentDiv.setAttribute('id', 'parentDivFeed');
        element.appendChild(parentDiv);
        
        for(var i=0;i<lista.length;i++){

            const newDiv = document.createElement("div");
            newDiv.setAttribute('id', 'listItem');
            const para = document.createElement("p");
                
            para.innerText = lista[i].nome;

            newDiv.appendChild(para);
            parentDiv.appendChild(newDiv);
            
        }
    }
    
    //Atualizar lista armazenada
    updateLocalStorage = () => {
        localStorage.setItem('lista', JSON.stringify(lista));
    }

}
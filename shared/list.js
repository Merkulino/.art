
//Criar um local de armazenamento e fazer verificação para armazenar
const localStorageTransaction = JSON.parse(
    localStorage.getItem('lista'));

let lista = localStorage.getItem('lista') !== null ? 
    localStorageTransaction : [];

export class ListaPost{

    constructor(){}

    //Verificar se contem post no JSON e ja criar elemento 

    verifyFeed(){
        
    }

    addLista(_nome, element) {

        let _id = Math.floor(Date.now() * Math.random()).toString(36);

        let novoObjeto = {id: _id, nome: _nome};
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

        if(element.hasChildNodes()){
            /*const prevParentDiv = document.getElementById('parentDivFeed');
            const newParentDiv = createElement("div");
            newParentDiv.setAttribute('id', 'parentDivFeed');

            prevParentDv.replaceChildren(newParentDiv, prevParentDiv.childNodes);

            element.appendChild(ne);*/ console.log('Caiu aqui')
        }else{
            const parentDiv = document.createElement("div");
            parentDiv.setAttribute('id', 'parentDivFeed');
            element.appendChild(parentDiv);  console.log('sem elemetno')
        
        

        for(var i=0;i<lista.length;i++){

            const newDiv = document.createElement("div");
            newDiv.setAttribute('id', 'listItem');
            const para = document.createElement("p");
                
            para.innerText = lista[i].nome;

            newDiv.appendChild(para);
            parentDiv.appendChild(newDiv);
            

            console.log(lista[i]);
        }
            
        }
        return lista;
    }
    
    updateLocalStorage = () => {
        localStorage.setItem('lista', JSON.stringify(lista));
    }

}
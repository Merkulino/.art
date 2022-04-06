
//Criar um local de armazenamento e fazer verificação para armazenar
const localStorageTransaction = JSON.parse(
    localStorage.getItem('lista'));

let lista = localStorage.getItem('lista') !== null ? 
    localStorageTransaction : [];

export class ListaPost{

    constructor(){}

    addLista(_nome) {

        let _id = Math.floor(Date.now() * Math.random()).toString(36);

        let novoObjeto = {id: _id, nome: _nome};
        lista.unshift(novoObjeto);

        this.updateLocalStorage();

        for(var i=0;i<lista.length;i++){
        console.log(lista[i]);
        }
    }

    showLista(element){

        for(var i=0;i<lista.length;i++){

            const divNova = document.createElement("div");
            divNova.setAttribute('id', 'listItem');
            const para = document.createElement("p");
                
            para.innerText = lista[i].nome;

            divNova.appendChild(para);
            element.appendChild(divNova);

            console.log(lista[i]);
        }
        return lista;
    }
    
    updateLocalStorage = () => {
        localStorage.setItem('lista', JSON.stringify(lista));
    }

}
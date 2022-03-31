export class ListaPost{


    lista = [{}];

    constructor(){}

    addLista(_nome) {

        let random = Math.random()*10000;
        let _id = Math.round(random);

        const novoObjeto = {id: _id, nome: _nome};
        this.lista.unshift(novoObjeto);
    }

    showLista(){

        for(var i=0;i<this.lista.length;i++){

            const ul = document.getElementById("list");
            const divNova = document.createElement("div");
            const para = document.createElement("p");
                
            para.innerText = this.lista[i].nome;

            divNova.appendChild(para);
            ul.appendChild(divNova);

            console.log(this.lista[i])
        }
        return this.lista;
    }

}
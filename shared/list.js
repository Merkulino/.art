
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
        
        //Imagem de perfil
        const imgIconDiv = document.createElement("div");
        imgIconDiv.setAttribute('class', 'perfilPostImgDiv');

        const imgPerfil = document.createElement("img");
        imgPerfil.setAttribute('id','perfilPostImg');

        const para = document.createElement("p");

        /*const button = document.createElement("button");
        
        button.setAttribute('id','deletePost'); 
        button.setAttribute('class','btn btn-primary'); 

        button.onclick = function(){
            console.log('Funcionou aqui');
        }*/

        const imgElemnt = document.createElement("img");
        imgElemnt.setAttribute('id', 'imgFeed');
        imgElemnt.setAttribute('src', novoObjeto.img);
        para.innerText = novoObjeto.nome;

        newDiv.appendChild(imgElemnt);
        //newDiv.insertAdjacentElement('beforeend', button);
        newDiv.insertBefore(para, newDiv.firstChild);

        //img de perfil
        imgIconDiv.appendChild(imgPerfil);
        newDiv.insertBefore(imgIconDiv, newDiv.firstChild);

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


            //Conteudo de publicação
            const divPubli = document.createElement("div");
            divPubli.setAttribute('id', 'publiElement');
            const para = document.createElement("p");
            para.setAttribute('id', 'txtContentPost');
            const imgElemnt = document.createElement("img");
            
            const usernamePost = document.createElement("p");
            usernamePost.setAttribute('id', 'usernamePost');
            usernamePost.innerText = 'Usuario';

            //Imagem de perfil
            const divUserInfo = document.createElement("div");
            divUserInfo.setAttribute('id','divUserInfo');

            const imgIconDiv = document.createElement("div");
            imgIconDiv.setAttribute('class', 'perfilPostImgDiv');

            const imgPerfil = document.createElement("img");
            imgPerfil.setAttribute('id','perfilPostImg');
            
            imgElemnt.setAttribute('src', lista[i].img);  
            imgElemnt.setAttribute('id', 'imgFeed');  
            para.innerText = lista[i].nome;

            //AppendChild

            divPubli.appendChild(imgElemnt);
            newDiv.appendChild(divPubli);
            //newDiv.insertAdjacentElement('beforeend', button);
            imgElemnt.insertAdjacentElement('beforebegin', para)
            //newDiv.insertBefore(usernamePost, newDiv.firstChild);

            //img de perfil
            imgIconDiv.appendChild(imgPerfil);

            divUserInfo.insertBefore(imgIconDiv, divUserInfo.firstChild);
            divUserInfo.appendChild(usernamePost);

            newDiv.insertBefore(divUserInfo, newDiv.firstChild);

            parentDiv.appendChild(newDiv);
            
        }
    }

    deletePost(){

        //lista = lista.filter(transaction => transaction.id !== ID);
        //this.updateLocalStorage();

    }
    
    //Atualizar lista armazenada
    updateLocalStorage = () => {
        localStorage.setItem('lista', JSON.stringify(lista));
    }

}

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
            para.innerText = lista[i].nome;

            const imgElemnt = document.createElement("img");
            imgElemnt.setAttribute('src', lista[i].img);  
            imgElemnt.setAttribute('id', 'imgFeed');  


            //Imagem de perfil
            const divUserInfo = document.createElement("div");
            divUserInfo.setAttribute('id','divUserInfo');

            const imgIconDiv = document.createElement("div");
            imgIconDiv.setAttribute('class', 'perfilPostImgDiv');
    
            const imgPerfil = document.createElement("img");
            imgPerfil.setAttribute('id','perfilPostImg');

            const usernamePost = document.createElement("p");
            usernamePost.setAttribute('id', 'usernamePost');
            usernamePost.innerText = 'Usuario';

            const prof = document.createElement("p");
            prof.setAttribute('id', 'profissaoTxt');
            prof.innerText = 'Profissão';
            
            //action div
            const divAction = document.createElement("div");
            divAction.setAttribute('id', 'divAction');

            const divLike = document.createElement("div");
            divLike.setAttribute('id', 'divLike');

            const aTagLike = document.createElement("a");
            aTagLike.setAttribute('id', 'tagA');
            aTagLike.setAttribute('href', '#');
            const iconLike = document.createElement("i");
            iconLike.setAttribute('class', 'fa-solid fa-thumbs-up');
            iconLike.innerText = 'Curtir';

            const divComment = document.createElement("div");
            divComment.setAttribute('id', 'divComment');

            const aTagComment = document.createElement("a");
            aTagComment.setAttribute('id', 'tagA');
            aTagComment.setAttribute('href', '#');
            const iconComment = document.createElement("i");
            iconComment.setAttribute('class', 'fa-solid fa-comment');
            iconComment.innerText = 'Comentar';

            const divShare = document.createElement("div");
            divShare.setAttribute('id', 'divShare');
                
            
            const aTagShare = document.createElement("a");
            aTagShare.setAttribute('id', 'tagA');
            aTagShare.setAttribute('href', '#');
            const iconShare = document.createElement("i");
            iconShare.setAttribute('class', 'fa-solid fa-share');
            iconShare.innerText = 'Compartilhar'; 
            
            //AppendChild

            divPubli.appendChild(imgElemnt);
            newDiv.appendChild(divPubli);
            imgElemnt.insertAdjacentElement('beforebegin', para)

            //img de perfil
            imgIconDiv.appendChild(imgPerfil);

            divUserInfo.insertBefore(imgIconDiv, divUserInfo.firstChild);
            divUserInfo.appendChild(usernamePost);

            divUserInfo.appendChild(prof);

            //action div

            aTagLike.appendChild(iconLike);
            divLike.appendChild(aTagLike);
            divAction.insertBefore(divLike, divAction.firstChild);

            aTagComment.appendChild(iconComment);
            divComment.appendChild(aTagComment);
            divAction.appendChild(divComment);

            aTagShare.appendChild(iconShare);
            divShare.appendChild(aTagShare);
            divAction.appendChild(divShare);

            newDiv.appendChild(divAction);

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
export class GerarElemento{


    gerarNovaPostagem(objeto,parentDiv){

        const newDiv = document.createElement("div");
        newDiv.setAttribute('id', 'listItem');

        //Conteudo de publicação
        const divPubli = document.createElement("div");
        divPubli.setAttribute('id', 'publiElement');

        const para = document.createElement("p");
        para.setAttribute('id', 'txtContentPost');
        para.innerText = objeto.txtPost;

        const imgElemnt = document.createElement("img");
        imgElemnt.setAttribute('src', objeto.img);  
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
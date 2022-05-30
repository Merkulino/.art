import { ListaPost } from '../shared/list.js';
import { Post } from '../shared/post.js'
import { CurrentUser } from '../userData/CurrentUser.js';

var lista = new ListaPost();
var post = new Post();
var currentUser = new CurrentUser();

var usernameTitle = document.getElementById('usernameCaption');
usernameTitle.innerText= currentUser.getUsername;

var btExit = document.querySelector('button#btExit');

var txtBox = document.getElementById('txtBox');
var img = document.getElementById('imgSelec');
var btSubmit = document.getElementById('btSubmit');
const ul = document.getElementById('list');
const element = document.getElementById('emptyPost');

post.inserirImg(img);

lista.verifyFeed(ul, element);

//Lista de objetos
btSubmit.onclick = function(){

    //verificar conteudo vazio e tal !!!!
    if(true){
      post.criarPost(ul, txtBox.value);
    }

    //Limpar txtBox essas parada  !!!
   
}

btExit.onclick = function (){

  //Verificar se o usuario realmente quer sair da pagina
  localStorage.removeItem('currentUser');
  window.location.href = "../index.html";

}

//sideNav
var openNav = document.getElementById('openNav');

openNav.onclick = function() {
  document.getElementById("mySidenav").style.width = "250px";

}
var closeNav = document.getElementById('close');

closeNav.onclick = function() {
  document.getElementById("mySidenav").style.width = "0";
}




    




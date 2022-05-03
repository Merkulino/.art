import { ListaPost } from '../shared/list.js';
import { Post } from '../shared/post.js'

var lista = new ListaPost();
var post = new Post();

var txtBox = document.getElementById('txtBox');
var img = document.getElementById('imgSelec');
var btSubmit = document.getElementById('btSubmit');
const ul = document.getElementById('list');

post.inserirImg(img);

lista.verifyFeed(ul);

//Lista de objetos
btSubmit.onclick = function(){

    //verificar conteudo vazio e tal !!!!
    if(true){
      post.criarPost(ul, txtBox.value);
    }

    //Limpar txtBox essas parada  !!!
   
}
/*
btDelete.onclick = function(){

  console.log('APAGOu')

}*/




    




import { ListaPost } from '../shared/list.js';
import { Post } from '../shared/post.js'

var post = new Post();
var lista = new ListaPost();

var txtBox = document.getElementById('txtBox');
var bt = document.getElementById('bt');
var btSubmit = document.getElementById('btSubmit');

//Lista de objetos
btSubmit.onclick = function(){

    //Fazer validações do post 

    lista.verifyFeed();
    
    post.setNome = txtBox.value;
    const ul = document.getElementById('list');

    if(true){
      lista.addLista(post.getNome, ul );  
    }
    
   
}

//Rescuperar lista
bt.onclick = function(){

    //Mostrar lista de nomes
    const ul = document.getElementById('list');
    lista.showLista(ul);
    
    
}

    




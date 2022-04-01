import { ListaPost } from '../shared/list.js';
import { Post } from '../shared/post.js'

var post = new Post();
var lista = new ListaPost();

var txtBox = document.getElementById('txtBox');
var bt = document.getElementById('bt');
var btSubmit = document.getElementById('btSubmit');

//Lista de objetos
btSubmit.onclick = function(){

    //Fazer validações do post e add numa lista
    
    post.setNome = txtBox.value;

    lista.addLista(post.getNome);
   
}

//Rescuperar lista
bt.onclick = function(){

    //Mostrar lista de nomes
    const ul = document.getElementById('list');
    lista.showLista(ul);
    
    
}

    




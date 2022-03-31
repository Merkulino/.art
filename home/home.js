import { ListaPost } from '../shared/list.js';
import { Post } from '../shared/post.js'

var post = new Post();
var lista = new ListaPost();

var txtBox = document.getElementById('txtBox');
var bt = document.getElementById('bt');
var btSubmit = document.getElementById('btSubmit');
//var nomes = [];

//Lista de objetos
btSubmit.onclick = function(){

    //Fazer validações do post e add numa lista
    
    post.setNome = txtBox.value;

    lista.addLista(post.getNome);

   
}

//Rescuperar lista
bt.onclick = function(){

    //Mostrar lista de nomes
    lista.showLista();

    /*for( let i = 0 ; i <  )

    lista.forEach(element => {

        

    });*/
    
    
}

    




import { ListaPost } from '../shared/list.js';
import { Post } from '../shared/post.js'

var lista = new ListaPost();

var txtBox = document.getElementById('txtBox');
var img = document.getElementById('imgSelec');
//var bt = document.getElementById('bt');
var btSubmit = document.getElementById('btSubmit');
const ul = document.getElementById('list');


lista.verifyFeed(ul);

img.addEventListener("change", function (){

  //FileReader vai converter em uma data URL
  const reader = new FileReader();

  reader.addEventListener("load", () => {

    console.log(reader.result);

    // Adicionar esse reader no meu objeto de lista da classe ListaPost
    //          e dois adicionar a lista com o URL no meu localStorage
    //Depois ver como refatorar isso tudo 
  });
  
  reader.readAsDataURL(this.files[0]);

});

//Lista de objetos
btSubmit.onclick = function(){

    //verificar conteudo vazio e tal
    if(true){
      var post = new Post(ul, txtBox.value, img);
    }
   
}


    




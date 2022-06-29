import api from "../fireConfig/api.js"

const localStorageTransaction = JSON.parse(
    localStorage.getItem('users'));
let users = localStorage.getItem('users') !== null ? 
    localStorageTransaction : [];

var verifyContent = false;
var bt = document.getElementById('btn-primary');
bt.onclick = function(){

    //Find id de todos elementos
    const dados = Array.from( document.querySelectorAll('input')).reduce(
        (acc, input) => ({...acc, [input.id]: input.value }), {} );
    
    let _id = Math.floor(Date.now() * Math.random()).toString(36);
    var userObjeto = {id: _id};
    
    for (const key in dados) {
        if(dados[key] === ''){
            alert('Insira todos os dados');
            verifyContent = false;
            break;
        }else{
        userObjeto[key] = dados[key];
        verifyContent = true;
        }
    }

    if(verifyContent){
        api.signin(userObjeto.username, userObjeto.nome, userObjeto.profissa, userObjeto.email, userObjeto.senha) ;
    }else{
        alert("usuario não cadastrado");
    }  
}



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

        /*  O codigo está salvando usuario no Firebase Auth
            Agora preciso trabalhar aquelas verificações de senha fraca email e tal
            E localStorage, decidir como vai trabalhar esse codigo antigo
        */

        //users.unshift(userObjeto);
        //localStorage.setItem('users', JSON.stringify(users));
        api.signin(userObjeto.email, userObjeto.senha);
        //alert('Novo usuario salvo no sistema, faça o login para acessar sua nova conta!');
        //window.location.href = "/index.html";
    }else{
        console.log(userObjeto +'n salvou');
    }  
}



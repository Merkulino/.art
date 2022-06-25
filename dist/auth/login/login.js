import { CurrentUser } from "../../userData/CurrentUser.js";

var emailTxt = document.getElementById('email');
var senhaTxt = document.getElementById('senha');
var btSubmit = document.getElementById('btSubmit');

btSubmit.onclick = function() {

    var newUser = new CurrentUser();

    //pegar meu storag
    const storage = JSON.parse(localStorage.getItem("users") || "[]");
    
    if(storage.length == 0){
        alert('Sem cadastro de usuario no sistema');
    }

    var emailInvalido = false;
    for(let i=0;i<storage.length; i++) {

        let usr = storage[i];
        
        if(emailTxt.value != usr.email){
            emailInvalido = true;
        }else{
            emailInvalido = false;
            if(senhaTxt.value != usr.senha){
                alert('senha invalida');
            }else{
                newUser.newCurrentUser(usr.id, usr.nome, usr.username, usr.profissa, usr.email);
                window.location.href = "../../home/home.html";
                
            }
            break;
        }

    };

    if(emailInvalido){
        alert("email invalido ou não cadastrado no sistema");
    }

}




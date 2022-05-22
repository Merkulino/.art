const localStorageTransaction = JSON.parse(
    localStorage.getItem('users'));

let users = localStorage.getItem('users') !== null ? 
    localStorageTransaction : [];

var bt = document.getElementById('btn-primary');

bt.onclick = function(){

    const dados = Array.from( document.querySelectorAll('input')).reduce(
        (acc, input) => ({...acc, [input.id]: input.value }), {} );
    
    let _id = Math.floor(Date.now() * Math.random()).toString(36);

    var userObjeto = {id: _id};
    var verifyContent = false;

    for (const key in dados) {
        if(dados[key] === ''){
            alert('Insira todos os dados');
            break;
    }else{
        userObjeto[key] = dados[key];
        verifyContent = true;
    }
    }

    if(verifyContent){
        users.unshift(userObjeto);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Novo usuario salvo no sistema, faça o login para acessar sua nova conta!');
        window.location.href = "../login/login.html";
    }else{
        console.log(userObjeto +'n salvou');
    }  
}



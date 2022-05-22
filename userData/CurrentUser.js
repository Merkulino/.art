var storage = JSON.parse(localStorage.getItem('currentUser'));

export class CurrentUser {

    _id;
    _name = "Nome Completo"
    _userName = 'Username';
    _profissa = 'Profissão';
    _email = 'Email@mail.com';
    _cidade = 'Cidade';
    _bairro = 'Bairro';
    _endereco = 'Endereço';

    constructor(){}

    newCurrentUser(id, name , userName, profissa, email){

        let objUser = {id: id, name: name, username: userName, profissa: profissa, email: email};
        storage = objUser;
        
        localStorage.setItem('currentUser', JSON.stringify(storage));
    }

    //Falta fazer conexão do SET com LocalStorage 

    get getID(){
        if(storage != null){
            return storage.id;
        }
        return this._id
    }

    set setID(id){
        this._id = id;
    }

    get getName(){
        if(storage != null){
            return storage.name;
        }
        return this.name
    }
    
    set setName(name){
        this._name = name;
    }

    get getUsername(){
        if(storage != null){
            return storage.username;
        }
        return this.userName
    }

    set setUsername(username){
        this._userName = username;
    }

    get getProfissa(){
        if(storage != null){
            return storage.profissa;
        }
        return this._profissa
    }
    
    set setProfissa(profissa){
        this._profissa = profissa;
    }

    get getEmail(){
        if(storage != null){
            return storage.email;
        }
        return this._email
    }
    
    set setEmail(email){
        this._email = email;
    }

    get getCidade(){
        if(storage != null){
            return this._cidade;
        }
        return this._cidade
    }
    
    set setCidade(cidade){
        this._cidade = cidade;
    }

    get getBairro(){
        if(storage != null){
            return this._bairro;
        }
        return this._bairro
    }
    
    set setBairro(bairro){
        this._bairro = bairro;
    }

    get getEndereco(){
        if(storage != null){
            return this._endereco;
        }
        return this._endereco
    }
    
    set setEndereco(endereco){
        this._endereco = endereco;
    }
}
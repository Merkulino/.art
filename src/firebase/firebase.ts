import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import 'dotenv/config';

const ENV = process.env;

const firebaseConfig = {
    apiKey: ENV.APIKEY,
    authDomain: ENV.AUTHDOMAIN,
    databaseURL: ENV.DATABASEURL,
    projectId: ENV.PROJECTID,
    storageBucket: ENV.STORAGEBUCKET,
    messagingSenderId: ENV.MESSAGINGSENDERID,
    appId: ENV.APPID,
    measurementId: ENV.MEASUREMENTID
  };


const app = initializeApp(firebaseConfig);

const auth = getAuth();

class FirebaseInit {
    constructor() {}

    // Autenticação
    async criarUsuario(email: string, senha: string) {    
        createUserWithEmailAndPassword(auth, email, senha).then(userCredentials => {
            console.log(userCredentials);
        }).catch(err => {
            console.log(err);
        });
    }

    async logarUsuario(email: string, senha: string) {
        signInWithEmailAndPassword(auth, email, senha).then(userCredentials => {
            console.log(userCredentials);
        }).catch(err => {
            console.log(err);
        });
 
    }

   // DataBase 
   async buscarPublicacoes(){}

   async buscarComentarios(){}

   async buscarDadosUsuario(){}

}

export default FirebaseInit


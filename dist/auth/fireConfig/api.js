import { firebaseConfig } from "./firebaseConfig.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js"
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js"

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
//const user = auth.currentUser;
const db = getDatabase();

//Auth
//SignIn
export default {

  signin(username, fullname, prof, email, senha){

      createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
          const user = userCredential.user;

          this.saveUserDatabase(user.uid, username, fullname, prof, email);

          alert('Novo usuario salvo no sistema, faça o login para acessar sua nova conta!');
          /*
            Fazer um link pro index, mas não pode ser imediatamente assim ↴ tem que esperar salvar os dados no firebase
            
            window.location.href = "/index.html";                         ↲
          */

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;          
          alert(errorMessage);
        });
  },

  saveUserDatabase(userId, username, name, prof, email) {
    set(ref(db, 'users/' + userId), {
      username: username,
      name: name,
      prof: prof,
      email: email,
    });
  
  },

  login(email, senha){
    signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;

      console.log("logado: " + user.uid);
      window.location.href = "../../home/home.html";     

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
  }

}
import { CurrentUser } from "../../userData/CurrentUser.js";
import api from "../fireConfig/api.js"

var emailTxt = document.getElementById('email');
var senhaTxt = document.getElementById('senha');
var btSubmit = document.getElementById('btSubmit');

btSubmit.onclick = function() {

    //var newUser = new CurrentUser();
    api.login(emailTxt.value, senhaTxt.value);

}




import api from "../fireConfig/api.js"

var emailTxt = document.getElementById('email');
var senhaTxt = document.getElementById('senha');
var btSubmit = document.getElementById('btSubmit');

btSubmit.onclick = function() {

    api.login(emailTxt.value, senhaTxt.value);    

}
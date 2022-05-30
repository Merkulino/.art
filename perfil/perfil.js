import { ListaPost } from '../shared/list.js';
import { CurrentUser } from '../userData/CurrentUser.js';

var lista = new ListaPost();
var currentUser = new CurrentUser();

var nome =  document.querySelector('div.name');
var uname = document.querySelector('div.username');
var prof = document.getElementById('prof');

nome.innerText = currentUser.getName;
uname.innerText = currentUser.getUsername;
prof.innerText = currentUser.getProfissa;

var tagLista = document.getElementById('feedTimeLine');

lista.showLista(tagLista);
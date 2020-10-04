import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const contato = new Login('.form-cadastro-contato');

login.init();
cadastro.init();
contato.init();

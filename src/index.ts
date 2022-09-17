import app from "./app";
import {getDados} from './endpoints/endPoitGet';
import {addDados} from './endpoints/criarDados';

app.get('/cadastro', getDados)

app.post('/cadastro', addDados)
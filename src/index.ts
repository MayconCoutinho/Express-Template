import app from "./app";
import getAllCadastro from "./endpoints/endPoitGet";
import {postCadastro} from "./endpoints/postCadastro";

app.get('/cadastro', getAllCadastro)
app.post('/cadastro', postCadastro)

  



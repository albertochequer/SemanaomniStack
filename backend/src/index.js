const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/* Rota / Recursos 

app get acessa rota

Métodos HTTP
GET: Buscar/listar informação no backend
POST: Criar informação no backend app post
PUT: Alterar informação no backend
DELETE: Deletar uma informação no backend
*/

/*Tipos de parâmetros
Query Params: Parâmetros nomeados enviados na rota após"?"(Filtros, paginação)
Route Params: parâmetros utilizados para identificar recursos(Único usuário)
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos


*/
/**
 * SQL: MySQL,*SQLlite, etc
 * NoSQL: Mongo DB,CouchDB,etc
 * 
 *

 /**
  * Driver: SELECT*FROM users
  * Query Builder: table('users').select('*').where()
  */







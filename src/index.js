const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);
/*
*   Métodos HTTP:
*   
    GET: Buscar/listar uma informação do Back-end
    POST: Criar uma informação no back-end
    PUT: ALterar uma informação no back-end
    DELETE: deletar uma informação no banck-end
*/

/**
 * Tipos de Parametro:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) ex: http://localhost:3333/users?name=Diego (procura os que tem nome Diego)
 *      Obs: é utilizado o comando "const params = request.query;"
 * Route Params: Parametros utilizados para identificar recursos ex: http://localhost:3333/users/1 (busca o usuario de ID == 1)
 *      Obs: é utilizado o comando "const params = request.params;"
 * Request Body: Corpo da requisiçao, utilizado para criar ou alterar recursos
 *      Obs: é utilizado o comando "const params = request.body;""

 */

/**
 *  Banco de dados
 * 
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */


/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select()
 */



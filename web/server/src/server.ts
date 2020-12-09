import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

//GET: Buscar ou Listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


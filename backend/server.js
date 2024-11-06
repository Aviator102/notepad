const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const noteController = require('./controllers/noteController');

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.post('/api/create', noteController.createNote);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const { createNote } = require('./noteModel');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/create', async (req, res) => {
  const { slug, content } = req.body;
  try {
    const note = await createNote(slug, content);
    res.json({ status: 'ok', note });
  } catch (error) {
    console.error('Erro ao salvar a nota:', error);
    res.status(500).json({ status: 'erro', message: 'Erro ao salvar a nota' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

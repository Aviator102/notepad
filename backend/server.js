// backend/server.js
const express = require('express');
const { createNoteTable, createNote, getNoteBySlug } = require('./noteModel');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Inicializa a tabela de notas no banco de dados
createNoteTable().then(() => console.log("Tabela de notas inicializada"));

// Endpoint para criar uma nota
app.post('/api/create', async (req, res) => {
  const { slug, content } = req.body;
  try {
    const note = await createNote(slug, content);
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a nota' });
  }
});

// Endpoint para buscar uma nota pelo slug
app.get('/api/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    const note = await getNoteBySlug(slug);
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ error: 'Nota não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar a nota' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

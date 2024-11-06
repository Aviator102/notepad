const express = require('express');
const { createNote } = require('./db');
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Endpoint para criar uma nova nota
app.post('/api/create', async (req, res) => {
    const { slug, content } = req.body;

    if (!slug || !content) {
        return res.status(400).json({ error: 'Slug e conteúdo são obrigatórios' });
    }

    try {
        const note = await createNote(slug, content);
        res.status(201).json({ note });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar a nota', details: error });
    }
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

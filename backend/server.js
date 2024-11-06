const express = require('express');
const { createNote } = require('./db');
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Endpoint para criar uma nova nota
app.post('/api/create', async (req, res) => {
    const { slug, content } = req.body;

    // Validação de campos
    if (!slug || !content) {
        return res.status(400).json({
            status: 'erro',
            message: 'Slug e conteúdo são obrigatórios'
        });
    }

    try {
        // Cria a nota no banco de dados
        const note = await createNote(slug, content);
        return res.status(201).json({
            status: 'sucesso',
            message: 'Nota criada com sucesso!',
            note: note // Retorna a nota criada para o cliente
        });
    } catch (error) {
        return res.status(500).json({
            status: 'erro',
            message: 'Erro ao criar a nota',
            error: error.message
        });
    }
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

const express = require('express');
const { createNote, getNoteByUsername } = require('./models/note');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('frontend'));

// Rota para criar uma nova nota
app.post('/api/notes', async (req, res) => {
    const { username, content } = req.body;
    try {
        const note = await createNote(username, content);
        res.status(201).json(note);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar a nota.' });
    }
});

// Rota para pegar uma nota pelo nome de usuário
app.get('/api/notes/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const note = await getNoteByUsername(username);
        if (note) {
            res.status(200).json(note);
        } else {
            res.status(404).json({ error: 'Nota não encontrada.' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar a nota.' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

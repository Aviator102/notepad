const db = require('../db');

// Função para criar uma nova nota
async function createNote(username, content) {
    const res = await db.query(
        'INSERT INTO notes (username, content) VALUES ($1, $2) RETURNING *',
        [username, content]
    );
    return res.rows[0];
}

// Função para buscar uma nota por nome de usuário (slug)
async function getNoteByUsername(username) {
    const res = await db.query('SELECT * FROM notes WHERE username = $1', [username]);
    return res.rows[0];
}

module.exports = { createNote, getNoteByUsername };

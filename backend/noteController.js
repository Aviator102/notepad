const pool = require('../db');

// Função para criar uma nova nota no banco de dados
const createNote = async (slug, content) => {
  const result = await pool.query(
    'INSERT INTO notes (slug, content) VALUES ($1, $2) RETURNING *',
    [slug, content]
  );
  return result.rows[0];
};

module.exports = {
  createNote
};

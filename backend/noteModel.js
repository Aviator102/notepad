// backend/noteModel.js
const db = require('./db');

async function createNoteTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS notes (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(100) UNIQUE NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await db.query(query);
}

async function createNote(slug, content) {
  const query = `
    INSERT INTO notes (slug, content) 
    VALUES ($1, $2) 
    RETURNING id, slug, content, created_at;
  `;
  const values = [slug, content];
  const result = await db.query(query, values);
  return result.rows[0];
}

module.exports = { createNote, createNoteTable };

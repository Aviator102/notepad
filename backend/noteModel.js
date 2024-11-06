// backend/noteModel.js
async function createNoteTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS notes (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(100) UNIQUE NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await db.query(query);
    console.log('Tabela de notas criada/verificada com sucesso.');
  } catch (error) {
    console.error('Erro ao criar/verificar a tabela:', error);
  }
}

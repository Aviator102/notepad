const { Client } = require('pg');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente
dotenv.config();

// Conectar ao banco de dados PostgreSQL
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

// Função para criar uma nova nota
const createNote = async (slug, content) => {
    const query = 'INSERT INTO notes(slug, content) VALUES($1, $2) RETURNING *';
    const values = [slug, content];
    const res = await client.query(query, values);
    return res.rows[0];
};

module.exports = { createNote };

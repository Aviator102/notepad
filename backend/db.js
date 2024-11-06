const { Pool } = require('pg');
require('dotenv').config();

// Configuração do pool de conexões com o banco de dados
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;

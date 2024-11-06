const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL, // Obtendo a URL de conexão do arquivo .env
  ssl: {
    rejectUnauthorized: false // Necessário para garantir que o SSL seja aceito
  }
});

client.connect();

module.exports = client;

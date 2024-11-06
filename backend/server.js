const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; // ou qualquer outra porta que você esteja usando

app.use(cors()); // Permite requisições de diferentes origens
app.use(express.json()); // Para aceitar JSON no corpo da requisição

// Definindo a rota para criar notas
app.post('/api/create', (req, res) => {
    // Aqui você pode colocar a lógica para salvar a nota no banco de dados
    const { slug, content } = req.body;
    
    if (!slug || !content) {
        return res.status(400).json({ error: 'Slug e conteúdo são obrigatórios' });
    }

    // Exemplo de resposta de sucesso
    res.status(200).json({ message: 'Nota criada com sucesso!' });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

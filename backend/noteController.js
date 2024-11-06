const noteModel = require('../models/noteModel');

// Função para criar nota através da API
exports.createNote = async (req, res) => {
  const { slug, content } = req.body;

  if (!slug || !content) {
    return res.status(400).json({ error: "Slug e content são obrigatórios" });
  }

  try {
    const note = await noteModel.createNote(slug, content);
    res.status(201).json({
      id: note.id,
      slug: note.slug,
      content: note.content,
      created_at: note.created_at
    });
  } catch (error) {
    console.error('Erro ao criar nota:', error);
    res.status(500).json({ error: 'Erro ao criar a nota' });
  }
};

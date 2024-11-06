// script.js
const apiUrl = '/api';

document.getElementById('note-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const slug = document.getElementById('slug').value;
  const content = document.getElementById('content').value;

  const response = await fetch(`${apiUrl}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ slug, content })
  });

  if (response.ok) {
    alert('Nota salva com sucesso!');
  } else {
    alert('Erro ao salvar a nota.');
  }
});

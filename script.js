document.getElementById('saveBtn').addEventListener('click', async function () {
  const slug = document.getElementById('slug').value;
  const content = document.getElementById('content').value;
  
  if (!slug || !content) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const response = await fetch('/api/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug, content })
  });

  const result = await response.json();

  if (result.status === 'ok') {
    document.getElementById('statusMessage').textContent = 'Nota salva com sucesso!';
    document.getElementById('statusMessage').style.color = 'green';
  } else {
    document.getElementById('statusMessage').textContent = 'Erro ao salvar a nota.';
    document.getElementById('statusMessage').style.color = 'red';
  }
});

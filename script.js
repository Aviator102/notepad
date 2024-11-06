document.getElementById('noteForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const slug = document.getElementById('slug').value;
  const content = document.getElementById('content').value;

  fetch('/api/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ slug, content }),
  })
  .then(response => response.json())
  .then(data => {
    alert('Nota criada com sucesso!');
    console.log(data);
  })
  .catch(error => {
    console.error('Erro:', error);
    alert('Erro ao criar nota');
  });
});

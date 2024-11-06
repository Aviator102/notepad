async function createNote() {
    const slug = document.getElementById('slug').value;
    const content = document.getElementById('content').value;

    if (!slug || !content) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try {
        // Envia a solicitação para a API
        const response = await fetch('/api/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ slug, content })
        });

        const data = await response.json();

        // Verifica o status da resposta
        if (response.ok) {
            alert(data.message);  // Exibe a mensagem de sucesso
            console.log('Nota criada:', data.note);  // Exibe os detalhes da nota
        } else {
            alert(data.message);  // Exibe a mensagem de erro
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    }
}

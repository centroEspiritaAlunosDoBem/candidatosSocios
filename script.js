const submitButton = document.getElementById('submit');

const form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();

    // Desativar o botão de enviar
    submitButton.disabled = true;
    submitButton.innerHTML = 'Enviando resposta, aguarde!';

    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        alert('FORMUÁRIO ENVIADO COM SUCESSO!!!');
        form.reset();

        // Reativar o botão após a resposta do servidor
        submitButton.disabled = false;
    }).catch(error => {
        // Caso haja um erro na requisição, reative o botão e informe o usuário
        submitButton.disabled = false;
        alert('Houve um erro ao enviar o formulário. Tente novamente.');
    });
});

/* Função para enviar a mensagem do usuário e receber a resposta do bot */
async function sendMessage() {
    // Captura o valor digitado pelo usuário no campo de entrada de texto
    const userInput = document.getElementById("user-input").value;

    // Verifica se o campo de entrada está vazio. Se estiver, a função é interrompida
    if (!userInput) return;

    // Captura a caixa de chat onde as mensagens serão exibidas
    const chatBox = document.getElementById("chat-box");

    // Adiciona a mensagem do usuário na caixa de chat com a formatação de texto à direita (user-message)
    chatBox.innerHTML += `<p class="user-message"><strong></strong> ${userInput}</p>`;

    // Limpa o campo de entrada após enviar a mensagem
    document.getElementById("user-input").value = "";

    try {
        // Realiza uma requisição HTTP para o servidor (supondo que o bot esteja rodando localmente em http://localhost:3000)
        const response = await fetch("http://localhost:3000/chat", {
            method: "POST", // Usando o método POST para enviar dados
            headers: { "Content-Type": "application/json" }, // Indicando que os dados são no formato JSON
            body: JSON.stringify({ prompt: userInput }), // Enviando a entrada do usuário como JSON
        });

        // Converte a resposta recebida do servidor para JSON
        const data = await response.json();

        // Adiciona a resposta do bot na caixa de chat com formatação de texto à esquerda (bot-message)
        chatBox.innerHTML += `<p class="bot-message"><strong></strong> ${data.response}</p>`;
    } catch (error) {
        // Caso ocorra um erro na requisição, exibe uma mensagem de erro na caixa de chat
        chatBox.innerHTML += `<p class="bot-message" style="color:red;"><strong>Erro:</strong> Não foi possível obter resposta.</p>`;
    }

    // Rolando a caixa de chat para mostrar a última mensagem
    chatBox.scrollTop = chatBox.scrollHeight;
}
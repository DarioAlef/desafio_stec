//mensagem do usuário
async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return
    const chatBox = document.getElementById("chat-box")
    chatBox.innerHTML += `<p class="user-message"><strong></strong> ${userInput}</p>`
    document.getElementById("user-input").value = ""

    try {
        const response = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: userInput }),
        });

        const data = await response.json()

        chatBox.innerHTML += `<p class="bot-message"><strong></strong> ${data.response}</p>`

        //som de notificação tipo de celular
        const notificationSound = new Audio('assets/sounds/notification.mp3')
        notificationSound.play();
    } catch (error) {
        chatBox.innerHTML += `<p class="bot-message" style="color:red;"><strong>Erro:</strong> Não foi possível obter resposta.</p>`
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}

//usar tecla enter
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
        event.preventDefault()
    }
});

// Carrega as variáveis de ambiente do arquivo .env para o processo
require("dotenv").config();

// Importa os módulos necessários
const express = require("express"); // Framework para criar o servidor web
const cors = require("cors"); // Middleware para permitir requisições de diferentes origens
const axios = require("axios"); // Biblioteca para realizar requisições HTTP (usada para se comunicar com a API externa)

// Inicializa o aplicativo Express
const app = express();

// Definindo a porta do servidor. Usando o valor da variável de ambiente PORT, se definida, ou 3000 por padrão.
const PORT = process.env.PORT || 3000;

// Usando o middleware CORS para permitir requisições de outras origens (útil para integrar com front-end de diferentes domínios)
app.use(cors());

// Usando o middleware para processar JSON no corpo da requisição
app.use(express.json());

// Definindo a rota POST /chat, que vai receber as requisições do front-end com o "prompt" do usuário
app.post("/chat", async (req, res) => {
  // Extraindo o "prompt" enviado no corpo da requisição
  const { prompt } = req.body;

  // Verificando se o "prompt" foi enviado. Se não, retorna um erro 400 (Bad Request)
  if (!prompt) {
    return res.status(400).json({ error: "Prompt não pode estar vazio" });
  }

  try {
    // Realiza uma requisição POST para a API externa do chatbot usando a biblioteca axios
    const response = await axios.post(
      "https://ai.stec.cx/single", // Endpoint da API Saturn IA (onde as perguntas são enviadas)
      {
        // Corpo da requisição que é enviado para a API
        prompt: prompt, // O "prompt" do usuário
        service: "merlin-v1", // O serviço específico que está sendo usado (presumivelmente o chatbot)
        clientid: process.env.CLIENT_ID, // O "clientid" é obtido das variáveis de ambiente para manter a segurança
        projectid: process.env.PROJECT_ID, // O "projectid" também vem das variáveis de ambiente
      },
      {
        // Definindo os cabeçalhos da requisição para garantir que o conteúdo seja enviado no formato JSON
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Quando a resposta da API é recebida, retorna a resposta do bot para o front-end
    res.json({ response: response.data.text });
  } catch (error) {
    // Se houver um erro ao fazer a requisição para a API, é registrado no console e um erro 500 é retornado ao cliente
    console.error("Erro ao se comunicar com a API do Saturn:", error);
    res.status(500).json({ error: "Erro ao obter resposta do chatbot" });
  }
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => console.log(`Servidor rodando na porta http://localhost:${PORT}`));

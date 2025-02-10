//importações
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;
const URL = `http://localhost:${PORT}`; // URL base

//importar outras requisições
app.use(cors());
//express reconhecer json
app.use(express.json());

//rota da requisição
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt não pode estar vazio" });
  }

  try {
    const response = await axios.post(
      "https://ai.stec.cx/single",
      {
        prompt: prompt,           //corpo da requisição
        service: "merlin-v1",
        clientid: process.env.CLIENT_ID,
        projectid: process.env.PROJECT_ID,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    //retornando a resposta do bot
    res.json({ response: response.data.text })
  } catch (error) {
    console.error("Erro ao se comunicar com a API do Saturn:", error)
    res.status(500).json({ error: "Erro ao obter resposta do chatbot" })
  }
});

//escutando a porta 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${URL}`)) 
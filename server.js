require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;
const URL = `http://localhost:${PORT}`; // URL base

app.use(cors());
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
        prompt: prompt,           //envio do client_id e do project_id junto com o prompt
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

    res.json({ response: response.data.text })
  } catch (error) {
    console.error("Erro ao se comunicar com a API do Saturn:", error)
    res.status(500).json({ error: "Erro ao obter resposta do chatbot" })
  }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${URL}`)) 

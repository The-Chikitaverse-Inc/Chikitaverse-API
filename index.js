// /api-a/index.js
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/roblox', async (req, res) => {
  try {
    const resposta = await axios.get('https://games.roblox.com/v1/games', {
      params: {
        universeIds: '7250922134'
      }
    });

    res.json({
      origem: 'API A',
      dadosJogo: resposta.data
    });
  } catch (erro) {
    console.error('Erro ao buscar dados do Roblox:', erro.message);
    res.status(500).json({ erro: 'Não foi possível buscar dados do jogo' });
  }
});

app.listen(1995, () => {
  console.log('API A rodando na porta 1995');
});

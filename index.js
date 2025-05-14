const express = require('express');
const axios = require('axios');
const app = express();
//Todo: Terminar essa API

app.get('/', (req, res) => {
    res.send(
      {
        title: 'Chikitaverse API',
        code: 200,
        incorporated: 'The Chikitaverse Inc.',
        games: {
            roblox: true,
            minecraft: false,
            chess: true,
        }
      }
    )
})

app.get('/roblox', async (req, res) => {
  try {
    const resposta = await axios.get('https://games.roblox.com/v1/games', {
      params: {
        universeIds: '7250922134'
      }
    });

    res.json({
      gameData: resposta.data
    });
  } catch (erro) {
    console.error('Erro ao buscar dados do Roblox:', erro.message);
    res.status(500).json({ erro: 'Não foi possível buscar dados do jogo' });
  }
});

app.get('/discord', async (req, res) => {
  try {
    const resposta1 = await axios.get('https://discordapp.com/api/guilds/1311765282389360650/widget.json');

    res.json({
      serveData: resposta1.data
    });
  } catch (erro) {
    console.error('Erro ao buscar dados do Discord:', erro.message);
    res.status(500).json({ erro: 'Não foi possível puxar dados do Servidor' });
  }
})

app.listen(1995, () => {
  console.log('API A rodando na porta 1995');
})
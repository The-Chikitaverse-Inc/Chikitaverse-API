const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/', async (req, res) => {
  try {
    const resposta = await axios.get('https://games.roblox.com/v1/games', {
      params: {
        universeIds: '91016125083941'
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

module.exports = router;

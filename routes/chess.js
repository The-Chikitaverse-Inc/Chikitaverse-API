const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/', async (req, res) => {
  try {
    const resposta = await axios.get('https://api.chess.com/pub/club/the-chikitaverse-inc');

    res.json({
      dataChess: resposta.data
    });
  } catch (erro) {
    console.error('Erro ao buscar dados:', erro.message);
    res.status(500).json({ erro: 'Não foi possível puxar dados' });
  }
})

module.exports = router
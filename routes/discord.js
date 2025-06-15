const express = require('express');
const router = express.Router();
const axios = require('axios')
const code403 = require('../middlewares/code403')

router.use(code403)

router.get('/', async (req, res) => {
  try {
    const resposta = await axios.get('https://discordapp.com/api/guilds/1311765282389360650/widget.json');
    
    res.json({
      serveData: resposta.data
    });
  } catch (erro) {
    console.error('Erro ao buscar dados do Discord:', erro.message);
    res.status(500).json({ erro: 'Não foi possível puxar dados do Servidor' });
  }
})

module.exports = router
const express = require('express')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = 1995;
const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 60,
});

app.use(limiter)

//* Bloquea acesso de qualquer um que não tem a chave
app.use((req, res, next) => {
  const key = req.headers['key'];
  if (key !== process.env.KEYACCES) {
    return res.status(403).json({ 
        message: 'Acesso negado',
        code: 403,
      });
  }
  next();
});


//! Rotas 
const roblox = require('./routes/roblox.js');
const discord = require('./routes/discord.js');
const chess = require('./routes/chess.js');

app.get('/', (req, res) => {
  res.send({
    title: 'Chikitaverse API',
    code: 200,
    incorporated: 'The Chikitaverse Inc.',
    games: {
      roblox: true,
      minecraft: false,
      chess: true,
    }
  });
});

app.use('/roblox', roblox);
app.use('/discord', discord)
app.use('/chess', chess);

app.listen(PORT, () => {
  console.log(`Servidor em ${PORT}`)
})

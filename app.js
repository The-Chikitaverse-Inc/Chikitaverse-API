const express = require('express')
const rateLimit = require('express-rate-limit')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = 1995;
const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 60,
});

app.use(limiter)

//! Rotas 
const roblox = require('./routes/roblox.js');
const discord = require('./routes/discord.js');
const chess = require('./routes/chess.js');
const authRoutes = require("./routes/auth.js");

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
app.use('/auth', authRoutes)

async function start() {
  try {
    await mongoose.connect(process.env.DBURI);
    console.log("MongoDB conectado com sucesso");
    app.listen(process.env.PORT, () => {
      console.log(`API rodando em http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Erro ao conectar no MongoDB:", err);
  }
}

start();

const express = require('express');
const app = express();
const PORT = 1995

//! Rotas 
const roblox = require('./routes/roblox.js')
const discord = require('./routes/discord.js')
const chess = require('./routes/chess.js')

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

app.use('/roblox', roblox)
app.use('/discord', discord)
app.use('/chess', chess)

app.listen(PORT, () => {
  console.log('Porta da API em 1995');
});
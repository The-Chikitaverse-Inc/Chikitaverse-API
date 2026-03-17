console.time('BigO')
const express = require('express')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = 3000
const app = express()

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 60,
})
app.use(limiter)

//! Rotas 
const roblox = require('./routes/roblox.js')
const discord = require('./routes/discord.js')
const chess = require('./routes/chess.js')

app.get('/', (req, res) => {
  res.send({
    title: 'Chikitaverse API',
    incorporated: 'The Chikitaverse Inc.',
    status: "ok",
    code: 200,
  })
})

app.use('/roblox', roblox)
app.use('/discord', discord)
app.use('/chess', chess)

app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}/`)
})
console.timeEnd('BigO')
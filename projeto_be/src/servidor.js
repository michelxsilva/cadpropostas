const PORT = 8080
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/propostas', (req, res) => {
    
  res.send(dataBase.getPropostas())
})

app.post('/propostas/:id', (req, res) => {
  res.send(dataBase.getProposta(req.params.id))
})

app.post('/propostas', (req, res) => {
  const proposta = dataBase.salvarProposta({
    cliente: req.body.cliente,
    valor: req.body.valor
  })
  res.send(proposta)
})

app.delete('/propostas/:id',(req, res) => {
    const proposta = dataBase.removeProposta(req.params.id)
    res.send(proposta)
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
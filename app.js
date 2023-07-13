console.log('hello-Node')
const express = require('express')
const app = express()
const port = 3000

app.get('/api/coworking/.id', (req, res) => {
  console.log(req.params.id)
  res.send(`Affichage les coworkings numero: ${req}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
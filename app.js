console.log('hello-Node')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Affichage de tous les coworkings!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
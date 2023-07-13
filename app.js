const mockCoworking = require('./mock-coworking')
const express = require('express')
const app = express()
const port = 3000



// app.get('/api/coworkings/:id', (req, res) => {

             /* exercixe: afficher le nom du coworking qui correspond a l'id en parametre: */

  // console.log(mockCoworking)


/*premier methode--------------------------------------------------------:*/

    //   console.log(parseInt (req.params.id), mockCoworking[0].id)
    // let targetCoworking;
    // for(let i =0; i < mockCoworking.length; i++){
    //   const element = mockCoworking[i];
    //   if(element.id === parseInt(req.params.id )){
    //     targetCoworking = element 
    //     break;
    //   }
    // }
    // res.send(`nom du coworking': ${targetCoworking ? targetCoworking.name : 'inconnu'}`)


/* deuxieme methode--------------------------------------------------------:*/

    // let targetCoworking = mockCoworking.find(el => el.id === parseInt(req.params.id))
    // res.json({result: `nom du coworking: ${targetCoworking ? targetCoworking.name : 'inconnu'}`})


              /* exercixe: creer un nouveau endpoint pour affiche le tableau entier en json*/

app.get('/api/coworkings', (req, res) => {
  const criterium  = req.query.criterium || 'superficy'
  const orderBy = req.query.orderBy ||'ASC'

mockCoworking.sort((a,b) => {
  return orderBy ==='DESC' ? b.superficy -  a.superficy: a.superficy - b.superficy
})

  res.json(mockCoworking)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
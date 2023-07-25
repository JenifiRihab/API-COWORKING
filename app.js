// const mockCoworkings = require('./mock-coworking')
// const express = require('express')
// const morgan = require('morgan')
// const app = express()
// const port = 3000

// const{ Sequelize, DataTypes } = require ('sequelize');

// const sequelize = new Sequelize('coworking-2023', 'root', '',{
// host: 'localhost',
// dialect:'mariadb',
// logging: false
// });

// sequelize.authenticate()
// .then(() => console.log('la connexion a la base de données a bien été établie.'))
// .catch(error => console.log('impossible de se connecter a la base de données ${error}'))

// const User = sequelize.define('User', {
//   username: DataTypes.STRING,
//   firstname: DataTypes.STRING,
//   birthday: DataTypes.DATE,
//   address: DataTypes.STRING,
//   job: DataTypes.STRING,
//   email: DataTypes.STRING,
// });

// sequelize
// .sync({force: true})
// .then(() =>{
//     User.create({
//         username: 'rihab',
//         firstname: 'jenifi',
//         birthday: new Date('mars 04, 1998, 01:00:00'),
//         address:'16 rue du Docteur Albert Schweitzer 33300 bordeaux',
//         job:'Dev-web',
//         email: 'rihab.jenifi@icloud.com',
       

//     })
// })

// const coworkingModels = require('./models/coworkingModel')
// const coworking = coworkingModels(sequelize, DataTypes)

// sequelize
// .sync({force: true})
// .then(() =>{
//     mockCoworkings.forEach(mock =>{
//     coworking.create({
//         id: 12,
//         name:'Oasis Coworking',
//         price: { "hour": 4, "day": 21, "month": 100 },
//         superficy: 200,
//         capacity: 27,
//         address: { "number": "68bis", "street": "avenue Jean Jaurès", "postCode": 33150, "city": "Cenon" },
    
//     })
//    })
// })

const express = require('express')
const morgan = require('morgan')
const sequelize = require('./db/sequelize')
const app = express()
const port = 3000

sequelize.initDb()

app.use(morgan('dev'))
app.use(express.json())

const coworkingRouter = require('./routes/coworkingRoutes')
const userRouter = require('./routes/userRoutes')
const reviewRouter = require('./routes/reviewRoutes')

app.use('/api/coworkings', coworkingRouter)
app.use('/api/users', userRouter)
app.use('/api/reviews', reviewRouter)

// Middleware quand l'url de la requête n'aboutit à rien
app.use((req, res) => {
    res.status(404).json({ message: `L'url demandé n'existe pas.` })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
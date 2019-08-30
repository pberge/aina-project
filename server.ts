import NewsController from './src/backend/Controllers/NewsController'
import { createConnection } from 'typeorm'
import { New } from './src/backend/Models/New'

const express = require("express")
const port = process.env.PORT || 3000
const app = express()
const newsController = new NewsController()
const multer = require('multer')
const upload = multer({limits: { fieldSize: 25 * 1024 * 1024 }})

app.use(express.static(__dirname + "/dist/"))

//.ENV CONFIG
require('dotenv').config()
console.log(process.env.ENV)

//CONNECT DB
if (process.env.ENV === 'development') {
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '22019432',
    database: 'mylocaldb',
    entities: [New] 
  })
  .then((conection) => {
    console.log("done")
  })
  .catch( (error) => console.log("error"))
}
else {
  createConnection({
    type: 'postgres',
    host: 'ec2-54-217-219-235.eu-west-1.compute.amazonaws.com',
    port: 5432,
    username: 'orcwddhkmmygyp',
    password: 'c6aacea7cfa94e882eccf895abbc2a1d0d32582fd058300efb14d7a981f36035',
    database: 'dv5ac8bgi28je',
    entities: [New] 
  })
  .then((conection) => {
    console.log("done")
  })
  .catch( (error) => console.log("error"))
}

//CORS
app.use(function(req, res, next) {
  if(process.env.NODE_ENV === 'development') {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080")
  }
  else res.header("Acces-Control-Allow-Origin", "https://ainaweb.herokuapp.com")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});

//CONTROLLER FUNCTIONS
let getAllNews = async (req, res) => {
  res.send(await newsController.getAllNews(req, res))
}

let createNew = async (req, res) => {
  res.send(await newsController.createNew(req, res))
}

let getNewById = async (req, res) => {
  res.send(await newsController.getNewById(req, res))
}

let deleteNew = async (req, res) => {
  res.send(await newsController.deleteNew(req, res))
}

//API ENDPOINTS

app.post('/api/news', upload.single('img'), createNew)

app.get('/api/news', getAllNews)

app.get('/api/new-by-id', getNewById)

app.delete('/api/news', deleteNew)


// START APP
app.listen(port, () => {
  console.log(`listening on ${port}`)
})

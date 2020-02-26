import NewsController from './backend/Controllers/NewsController'
import PricesController from './backend/Controllers/PricesController'
import { createConnection, getConnection } from 'typeorm'
import { New } from './backend/Models/New'
import { Price } from './backend/Models/Price'

const express = require("express")
const port = process.env.PORT || 3000
const app = express()
const newsController = new NewsController()
const pricesController = new PricesController()
const multer = require('multer')
const upload = multer({limits: { fieldSize: 25 * 1024 * 1024 }})

app.use(express.static(__dirname + "/dist/"))

//.ENV CONFIG
require('dotenv').config()
console.log(process.env.ENV)

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason || reason)
})

//CONNECT DB
if (process.env.ENV === 'development') {
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '22019432',
    database: 'mylocaldb',
    entities: [New, Price]
  })
  .then((conection) => {
    console.log("done")
    getConnection().query('CREATE TABLE IF NOT EXISTS prices (id character varying(255), name character varying(255), sleep int, bedandbreakfast int, halfpension int, fullboard int);')
    getConnection().query("Select * from prices where id='1'").then(res => {
      if(res[0] == null) {
        getConnection().query("INSERT INTO prices values (1, 'laCasa', 16, 19, 26, 31)")
        getConnection().query("INSERT INTO prices values (2, 'laBorda', 16, 19, 26, 31)")
        getConnection().query("INSERT INTO prices values (3, 'woodHouse', 16, 19, 26, 31)")
        getConnection().query("INSERT INTO prices values (4, 'sanSerni', 16, 0, 0, 0)")
        getConnection().query("INSERT INTO prices values (5, 'meritxell', 16, 0, 0, 0)")
      }
    })

    getConnection().query('CREATE TABLE IF NOT EXISTS news (title character varying(255), text character varying(5000), img character varying(255), id character varying(255), published boolean, creationdate character varying(255));')
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
    entities: [New, Price]
  })
  .then((conection) => {
    console.log("done")
    getConnection().query('CREATE TABLE IF NOT EXISTS prices (id character varying(255), name character varying(255), sleep int, bedandbreakfast int, halfpension int, fullboard int);')
    getConnection().query("Select * from prices where id='1'").then(res => {
      if(res[0] == null) {
        getConnection().query("INSERT INTO prices values (1, 'laCasa', 16, 19, 26, 31)")
        getConnection().query("INSERT INTO prices values (2, 'laBorda', 16, 19, 26, 31)")
        getConnection().query("INSERT INTO prices values (3, 'woodHouse', 16, 19, 26, 31)")
        getConnection().query("INSERT INTO prices values (4, 'sanSerni', 16, 0, 0, 0)")
        getConnection().query("INSERT INTO prices values (5, 'meritxell', 16, 0, 0, 0)")
      }
    })

    getConnection().query('CREATE TABLE IF NOT EXISTS news (title character varying(255), text character varying(5000), img character varying(255), id character varying(255), published boolean, creationdate character varying(255));')
  })
  .catch( (error) => console.log("error"))
}

//CORS
app.use(function(req, res, next) {
  if(process.env.ENV === 'development') {
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
  res.send(await newsController.createNew(req, res).catch(a => console.log(a)))
}

let editNew = async (req, res) => {
  res.send(await newsController.editNew(req, res).catch(a => console.log(a)))
}

let getNewById = async (req, res) => {
  res.send(await newsController.getNewById(req, res))
}

let deleteNew = async (req, res) => {
  res.send(await newsController.deleteNew(req, res))
}

let getAllPrices = async(req, res) => {
  res.send(await pricesController.getAllPrices(req, res))
}

let editPrices = async(req, res) => {
  res.send(await pricesController.editPrices(req, res))
}

//API ENDPOINTS

app.post('/api/news', upload.single('img'), createNew)

app.put('/api/news', upload.single('img'), editNew)

app.get('/api/news', getAllNews)

app.get('/api/new-by-id', getNewById)

app.delete('/api/news', deleteNew)

app.get('/api/prices', getAllPrices)

app.put('/api/prices', upload.none(), editPrices)


// START APP
app.listen(port, () => {
  console.log(`listening on ${port}`)
});

import express from 'express'
import bodyParser from 'body-parser'
import { createConnection } from 'typeorm'
import { New } from './Models/New'

class App {
  public app: any
  public port: number
 
  constructor(controllers: any, port: number) {
    
    this.app = express()
    this.port = port

    // console.log(process.env.NODE_ENV)

    // createConnection({
    //       type: 'postgres',
    //       host: 'localhost',
    //       port: 5432,
    //       username: 'postgres',
    //       password: '22019432',
    //       database: 'mylocaldb',
    //       entities: [New] 
    //     })
 
    if (!process.env.NODE_ENV) {
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

    this.app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:8080")
      res.header("Access-Control-Allow-Origin", "http://www.ainaweb.herokuapp.com")
      res.header("Access-Control-Allow-Origin", "http://www.aina.ad")
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
      next();
    });

    this.initializeMiddlewares()
    this.initializeControllers(controllers)
  }
 
  public async initializeMiddlewares() {
    await this.app.use(bodyParser.urlencoded({ extended: true }))
    await this.app.use(bodyParser.json()) 
  }
 
  public async initializeControllers(controllers: any) {
    await controllers.forEach((controller: any) => {
      this.app.use('/', controller.router)
    })
  }

  public listen() {
    this.app.listen(process.env.PORT || this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;

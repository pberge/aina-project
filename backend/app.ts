import express from 'express'
import bodyParser from 'body-parser'
import { createConnection } from 'typeorm'
import {New} from './Models/New'

const env = process.env.NODE_ENV || 'development';

class App {
  public app: express.Application
  public port: number
 
  constructor(controllers: any, port: number) {
    
    this.app = express()
    this.port = port
 
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
    

    this.initializeMiddlewares()
    this.initializeControllers(controllers)
  }
 
  public async initializeMiddlewares() {
    await this.app.use(bodyParser.json());
  }
 
  public async initializeControllers(controllers: any) {
    await controllers.forEach((controller: any) => {
      this.app.use('/', controller.router)
    })
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;
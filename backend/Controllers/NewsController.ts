import express from 'express'
import New from '../Models/New'
 
class NewsController {
  public path = '/news';
  public router = express.Router();
 
  private news: New[] = [
    {
      title: 'Marcin',
      text: 'Dolor sit amet',
      img: 'Lorem Ipsum',
    }
  ];
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllNews);
    this.router.post(this.path, this.createNew);
  }
 
  getAllNews = (request: express.Request, response: express.Response) => {
    response.send(this.news);
  }
 
  createNew = (request: express.Request, response: express.Response) => {
    const newItem: New = request.body;
    this.news.push(newItem);
    response.send(newItem);
  }
}
 
export default NewsController;
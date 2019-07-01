import express from 'express'
import { New } from '../Models/New'
import NewsService from '../Services/NewsService'
import {
    JsonController
} from 'routing-controllers';

@JsonController('/news')
class NewsController {
    public path = '/news';
    public router = express.Router();
    public newsService: NewsService

    constructor() {
        this.newsService = new NewsService()
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllNews);
        this.router.post(this.path, this.createNew);
    }

    getAllNews = async (request: express.Request, response: express.Response) => {
        response.send(await this.newsService.getNews())
    }

    createNew = async (request: express.Request, response: express.Response) => {
        const newItem: New = request.body;
        response.send(await this.newsService.createNew(newItem));
    }
}

export default NewsController;



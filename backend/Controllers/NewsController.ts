import * as express from 'express'
import { NewImage } from '../Models/NewImage'
import NewsService from '../Services/NewsService'
import {
    JsonController
} from 'routing-controllers'

const multer = require('multer')

@JsonController('/news')
class NewsController {
    public path = '/news';
    public router = express.Router();
    public newsService: NewsService
    public upload = multer({limits: { fieldSize: 25 * 1024 * 1024 }})

    constructor() {
        this.newsService = new NewsService()
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllNews);
        this.router.post(this.path, this.upload.single('img'), this.createNew);
        this.router.delete(this.path, this.deleteNew);
    }

    getAllNews = async (request: express.Request, response: express.Response) => {
        response.send(await this.newsService.getNews())
    }

    createNew = async (request: express.Request, response: express.Response) => {
        const newItem: NewImage = {
            title: request.body.title,
            text: request.body.text,
            img: request.body.img,
            creationDate: request.body.creationDate,
            published: request.body.published
        }

        response.send(await this.newsService.createNew(newItem));
    }

    deleteNew = async (request: express.Request, response: express.Response) => {
        response.send(await this.newsService.deleteNew(request.query.id))
    }
}

export default NewsController;



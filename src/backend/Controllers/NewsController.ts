import NewsService from '../Services/NewsService'

export default class NewsController {
    public newsService: any

    constructor() {
        this.newsService = new NewsService()
    }

    getAllNews = async (request: any, response: any) => {
        response.send(await this.newsService.getNews())
    }

    createNew = async (request: any, response: any) => {
        console.log("controller:" + request.body)
        const newItem: any = {
            title: request.body.title,
            text: request.body.text,
            img: request.body.img,
            creationDate: request.body.creationDate,
            published: request.body.published
        }

        response.send(await this.newsService.createNew(newItem));
    }

    deleteNew = async (request: any, response: any) => {
        response.send(await this.newsService.deleteNew(request.query.id))
    }

    getNewById = async (request: any, response: any) => {
        response.send(await this.newsService.getNewById(request.query.id))
    }
}

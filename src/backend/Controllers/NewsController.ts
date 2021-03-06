import NewsService from '../Services/NewsService'

export default class NewsController {
    public newsService: any

    constructor() {
        this.newsService = new NewsService()
    }

    getAllNews = async (request: any, response: any) => {
        return await this.newsService.getNews()
    }

    createNew = async (request: any, response: any) => {
        try {
            const newItem: any = {
                title: request.body.title,
                text: request.body.text,
                img: request.body.img,
                creationDate: request.body.creationDate,
                published: request.body.published
            }

            return await this.newsService.createNew(newItem)
        }
        catch(a) {
            console.log(a)
        }
    }

    editNew = async (request: any, response: any) => {
        try {
            const newItem: any = {
                id: request.body.id,
                title: request.body.title,
                text: request.body.text,
                img: request.body.img,
                creationDate: request.body.creationDate,
                published: request.body.published
            }

            return await this.newsService.editNew(newItem)
        }
        catch(a) {
            console.log(a)
        }
    }

    deleteNew = async (request: any, response: any) => {
        return await this.newsService.deleteNew(request.query.id)
    }

    getNewById = async (request: any, response: any) => {
        return await this.newsService.getNewById(request.query.id)
    }
}

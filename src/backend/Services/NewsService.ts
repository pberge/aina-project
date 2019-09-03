import { New }  from "../Models/New"
import { NewImage } from "../Models/NewImage"
import NewsRepository from "../Repositories/NewsRepository"
import { getCustomRepository } from "typeorm"
import imageUploader from "../imageUploader"

export default class NewsService {    

    public async getNews(): Promise<New[]> {
        let newsRepository = await getCustomRepository(NewsRepository)
        let res = await newsRepository.find()
        
        return res
    }

    public async createNew(item: NewImage): Promise<New> {
        let url = await new imageUploader().upload(item.img) //upload image
        item.img = url

        let newsRepository = await getCustomRepository(NewsRepository)
        let res = await newsRepository.saveNew(item)

        return res
    }

    public async deleteNew(id: string): Promise<New> {
        let newsRepository = await getCustomRepository(NewsRepository)

        let item =  await newsRepository.findById(id)
        await new imageUploader().delete(item.img) //delete image

        await newsRepository.deleteNew(id)
        return new New()
    }

    public async getNewById(id: string): Promise<New> {
        let newsRepository = await getCustomRepository(NewsRepository)

        let item =  await newsRepository.findById(id)
        return item
    }
}
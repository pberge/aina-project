import { New }  from "../Models/New"
import { NewImage } from "../Models/NewImage"
import NewsRepository from "../Repositories/NewsRepository"
import { Service } from "typedi"
import { getCustomRepository } from "typeorm"
import imageUploader from "../imageUploader"

@Service()
export default class NewsService {    

    public async getNews(): Promise<New[]> {
        let newsRepository = await getCustomRepository(NewsRepository)
        let res = await newsRepository.find()
        return res
    }

    public async createNew(item: NewImage): Promise<New> {
        let url = await new imageUploader().upload(item.img) //upload image
        item.img = url

        // let newsRepository = await getCustomRepository(NewsRepository)
        // let res = await newsRepository.saveNew(item)

        return new New//res
    }
}
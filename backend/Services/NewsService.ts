import  { New }  from "../Models/New"
import NewsRepository from "../Repositories/NewsRepository"
import { Service } from "typedi"
import { getCustomRepository, getRepository } from "typeorm";

@Service()
export default class NewsService {    

    public async getNews(): Promise<New[]> {
        let newsRepository = await getCustomRepository(NewsRepository)
        let res = await newsRepository.find()
        return res
    }

    public async createNew(item: New): Promise<New> {
        //PUJAR LA FOTO
        let newsRepository = await getCustomRepository(NewsRepository)
        let res = await newsRepository.saveNew(item)
        return res
    }
}
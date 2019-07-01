import  { New }  from "../Models/New"
import NewsRepository from "../Repositories/NewsRepository"
import { Service } from "typedi"
import { getCustomRepository } from "typeorm";

@Service()
export default class NewsService {    

    public async getNews(): Promise<New[]> {
        let newsRepository = await getCustomRepository(NewsRepository)
        let res = await newsRepository.find()
        console.log(res)
        return res
    }
}
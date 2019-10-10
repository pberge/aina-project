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
        if(item.img !== '') {
            let url = await new imageUploader().upload(item.img) //upload image
            item.img = url
        }
        let newsRepository = await getCustomRepository(NewsRepository)
        let res = await newsRepository.saveNew(item)

        return res
    }

    public async editNew(item: New): Promise<New> {
        let newsRepository = await getCustomRepository(NewsRepository)
        let old = await newsRepository.findById(item.id) 

        if(old.img !== item.img) {
            await new imageUploader().delete(old.img) //delete image //falta treure lo de baixar qualitat foto
            let url = await new imageUploader().upload(item.img) //upload image
            old.img = url
        }

        old.title = item.title
        old.text = item.text
        old.creationDate = item.creationDate

        let res = await newsRepository.editNew(old)

        return res
    }

    public async deleteNew(id: string): Promise<New> {
        let newsRepository = await getCustomRepository(NewsRepository)

        let item =  await newsRepository.findById(id)
        if (item.img != '') await new imageUploader().delete(item.img) //delete image

        await newsRepository.deleteNew(id)
        return new New()
    }

    public async getNewById(id: string): Promise<New> {
        let newsRepository = await getCustomRepository(NewsRepository)

        let item =  await newsRepository.findById(id)
        return item
    }
}
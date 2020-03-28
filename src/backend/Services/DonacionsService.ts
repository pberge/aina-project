import { Donacio }  from "../Models/Donacio"
import { DonacioImage } from "../Models/DonacioImage"
import { Text }  from "../Models/Text"
import { TextImage } from "../Models/TextImage"
import DonacionsRepository from "../Repositories/DonacionsRepository"
import TextsRepository from "../Repositories/TextsRepository"
import { getCustomRepository } from "typeorm"
import imageUploader from "../imageUploader"

export default class donacionsService {    

    public async getDonacions(): Promise<Donacio[]> {
        let donacionsRepository = await getCustomRepository(DonacionsRepository)
        let res = await donacionsRepository.find()
        
        return res
    }

    public async createDonacio(item: DonacioImage): Promise<Donacio> {
        if(item.img !== '') {
            let url = await new imageUploader().upload(item.img) //upload image
            item.img = url
        }
        if(item.imgColaborador !== '') {
            let url = await new imageUploader().upload(item.imgColaborador) //upload image
            item.imgColaborador = url
        }
        let donacionsRepository = await getCustomRepository(DonacionsRepository)
        let res = await donacionsRepository.savedonacio(item)

        return res
    }

    public async editDonacio(item: Donacio): Promise<Donacio> {
        let donacionsRepository = await getCustomRepository(DonacionsRepository)
        let old = await donacionsRepository.findById(item.id)
        let imageSplited = item.img.split("/")
        let image = "http://res.cloudinary.com/ainacloud/image/upload/" + imageSplited[imageSplited.length-2]+"/"+imageSplited[imageSplited.length-1]
        if(old.img !== image) {
            await new imageUploader().delete(old.img) //delete image 
            let url = await new imageUploader().upload(item.img) //upload image
            old.img = url
        }

        old.descripcio = item.descripcio
        old.nomColaborador = item.nomColaborador
        old.esportColaborador = item.esportColaborador

        let imageColSplited = item.imgColaborador.split("/")
        let imageCol = "http://res.cloudinary.com/ainacloud/image/upload/" + imageColSplited[imageColSplited.length-2]+"/"+imageColSplited[imageColSplited.length-1]
        if(old.imgColaborador !== imageCol) {
            await new imageUploader().delete(old.imgColaborador) //delete image 
            let url = await new imageUploader().upload(item.imgColaborador) //upload image
            old.imgColaborador = url
        }

        let res = await donacionsRepository.editdonacio(old)

        return res
    }

    public async deleteDonacio(id: string): Promise<Donacio> {
        let donacionsRepository = await getCustomRepository(DonacionsRepository)

        let item =  await donacionsRepository.findById(id)
        if (item.img != '') await new imageUploader().delete(item.img) //delete image

        await donacionsRepository.deletedonacio(id)
        return new Donacio()
    }

    public async getDonacioById(id: string): Promise<Donacio> {
        let donacionsRepository = await getCustomRepository(DonacionsRepository)

        let item =  await donacionsRepository.findById(id)
        return item
    }

    public async getTexts(): Promise<Text[]> {
        let textsRepository = await getCustomRepository(TextsRepository)
        let res = await textsRepository.find()
        
        return res
    }

    public async createText(item: TextImage): Promise<Text> {
        let textsRepository = await getCustomRepository(TextsRepository)
        let res = await textsRepository.saveText(item)

        return res
    }

    public async editText(item: Text): Promise<Text> {
        let textsRepository = await getCustomRepository(TextsRepository)
        let old = await textsRepository.findById(item.id)

        old.autor = item.autor
        old.text = item.text

        let res = await textsRepository.editText(old)

        return res
    }

    public async deleteText(id: string): Promise<Text> {
        let textsRepository = await getCustomRepository(TextsRepository)

        await textsRepository.deleteText(id)
        return new Text()
    }
}
import { Price }  from "../Models/Price"
import PricesRepository from "../Repositories/PricesRepository"
import { getCustomRepository } from "typeorm"

export default class PricesService {    

    public async getPrices(): Promise<Price[]> {
        let pricesRepository = await getCustomRepository(PricesRepository)
        let res = await pricesRepository.find()
        
        return res
    }

    public async editPrices(price: any): Promise<Price> {
        let pricesRepository = await getCustomRepository(PricesRepository)
        let element: Price = await pricesRepository.findByName(price.name)
        element.sleep = price.sleep
        element.bedandbreakfast = price.bedandbreakfast
        element.halfpension = price.halfpension
        element.fullboard = price.fullboard
        
        await pricesRepository.editPrice(element)

        return element
    }
}
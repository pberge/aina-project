import pricesService from '../Services/PricesService'

export default class PricesController {
    public pricesService: any

    constructor() {
        this.pricesService = new pricesService()
    }

    getAllPrices = async (request: any, response: any) => {
        return await this.pricesService.getPrices()
    }

    editPrices = async (request: any, response: any) => {
        try {
            const newItem: any = {
                name: request.body.name,
                sleep: request.body.sleep,
                bedandbreakfast: request.body.bedandbreakfast,
                halfpension: request.body.halfpension,
                fullboard: request.body.fullboard
            }
            return await this.pricesService.editPrices(newItem)
        }   
        catch(e) {
            console.log(e)
        }
    }
}

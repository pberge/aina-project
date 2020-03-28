import DonacionsService from '../Services/DonacionsService'

export default class DonacionsController {
    public donacionsService: any

    constructor() {
        this.donacionsService = new DonacionsService()
    }

    getAllDonacions = async (request: any, response: any) => {
        return await this.donacionsService.getDonacions()
    }

    createDonacio = async (request: any, response: any) => {
        try {
            const donacioItem: any = {
                descripcio: request.body.descripcio,
                img: request.body.img,
                imgColaborador: request.body.imgColaborador,
                nomColaborador: request.body.nomColaborador,
                esportColaborador: request.body.esportColaborador,
            }

            return await this.donacionsService.createDonacio(donacioItem)
        }
        catch(a) {
            console.log(a)
        }
    }

    editDonacio = async (request: any, response: any) => {
        try {
            const donacioItem: any = {
                id: request.body.id,
                descripcio: request.body.descripcio,
                img: request.body.img,
                imgColaborador: request.body.imgColaborador,
                nomColaborador: request.body.nomColaborador,
                esportColaborador: request.body.esportColaborador,
            }

            return await this.donacionsService.editDonacio(donacioItem)
        }
        catch(a) {
            console.log(a)
        }
    }

    deleteDonacio = async (request: any, response: any) => {
        return await this.donacionsService.deleteDonacio(request.query.id)
    }

    getDonacioById = async (request: any, response: any) => {
        return await this.donacionsService.getDonacioById(request.query.id)
    }
}

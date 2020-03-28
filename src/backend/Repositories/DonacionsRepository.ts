import { Donacio } from "../Models/Donacio"
import { DonacioImage } from "../Models/DonacioImage"
import { Repository, EntityRepository, getConnection } from "typeorm";
import unique from "uniqid"

@EntityRepository(Donacio)
export default class DonaciosRepository extends Repository<Donacio>  {

    public async find(): Promise<Donacio[]> {
        return await getConnection().query('SELECT * FROM donacions')
    }

    public async findById(id: string): Promise<Donacio> {        
        let res =  await getConnection()
        .createQueryBuilder()
        .select()
        .from("donacions", "donacions")
        .where("id = :id", { id: id })
        .execute()

        return res[0]
    }


    public async savedonacio(item: DonacioImage): Promise<Donacio> {
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into("donacions")
        .values([
            {   id: unique(),  
                descripcio: item.descripcio, 
                img: item.img,
                imgColaborador: item.imgColaborador, 
                nomColaborador: item.nomColaborador,
                esportColaborador: item.esportColaborador
            }
        ])
        .execute()
        return new Donacio()
    }

    public async editdonacio(item: Donacio): Promise<Donacio> {
        await getConnection()
        .createQueryBuilder()
        .update("donacions")
        .set({ 
            id: item.id,  
            text: item.descripcio, 
            autor: item.img,
            imgColaborador: item.imgColaborador, 
            nomColaborador: item.nomColaborador
        } as any)
        .where("id = :id", { id: item.id })
        .execute()

        console.log("save repository")
        return item
    }

    public async deletedonacio(id: string): Promise<Donacio> {
        await getConnection()
        .createQueryBuilder()
        .delete()
        .from("donacions")
        .where("id = :id", { id: id })
        .execute()

        return new Donacio()
    }
}
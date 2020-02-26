import { Price } from "../Models/Price"
import { Repository, EntityRepository, getConnection } from "typeorm"
import unique from "uniqid"

@EntityRepository(Price)
export default class PricesRepository extends Repository<Price>  {

    public async find(): Promise<Price[]> {
        return await getConnection().query('SELECT * FROM prices')
    }

    public async editPrice(item: Price): Promise<Price> {
        await getConnection()
        .createQueryBuilder()
        .update("prices")
        .set({   id: item.id, name: item.name, sleep: item.sleep, bedandbreakfast: item.bedandbreakfast,
                halfpension: item.halfpension, fullboard: item.fullboard 
        } as any)
        .where("id = :id", { id: item.id })
        .execute()
        return new Price()
    }

    public async savePrice(item: Price): Promise<Price> {
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into("prices")
        .values([
            {   id: unique(), name: item.name, sleep: item.sleep, bedandbreakfast: item.bedandbreakfast,
                halfpension: item.halfpension, fullboard: item.fullboard 
            }
        ])
        .execute()
        return new Price()
    }

    public async findByName(name: string): Promise<Price> {
        let res =  await getConnection()
        .createQueryBuilder()
        .select()
        .from("prices", "prices")
        .where("name = :name", { name: name })
        .execute()

        return res[0]
    }
}
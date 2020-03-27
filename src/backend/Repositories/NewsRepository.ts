import { New } from "../Models/New"
import { NewImage } from "../Models/NewImage"
import { Repository, EntityRepository, getConnection } from "typeorm";
import unique from "uniqid"

@EntityRepository(New)
export default class NewsRepository extends Repository<New>  {

    public async find(): Promise<New[]> {
        return await getConnection().query('SELECT * FROM news')
    }

    public async findById(id: string): Promise<New> {        
        let res =  await getConnection()
        .createQueryBuilder()
        .select()
        .from("news", "news")
        .where("id = :id", { id: id })
        .execute()

        return res[0]
    }


    public async saveNew(item: NewImage): Promise<New> {
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into("news")
        .values([
            {   id: unique(), title: item.title, text: item.text, img: item.img,
                creationdate: item.creationDate, published: item.published ? 1 : 0
            }
        ])
        .execute()
        return new New()
    }

    public async editNew(item: New): Promise<New> {
        await getConnection()
        .createQueryBuilder()
        .update("news")
        .set({ 
            title: item.title,
            text: item.text,
            creationdate: item.creationDate,
            img: item.img,
            id: item.id
        } as any)
        .where("id = :id", { id: item.id })
        .execute()

        console.log("save repository")
        return item
    }

    public async deleteNew(id: string): Promise<New> {
        await getConnection()
        .createQueryBuilder()
        .delete()
        .from("news")
        .where("id = :id", { id: id })
        .execute()

        return new New()
    }
}
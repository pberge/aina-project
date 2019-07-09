import { New } from "../Models/New"
import { NewImage } from "../Models/NewImage"
import { Repository, EntityRepository, getConnection } from "typeorm";
import unique from "uniqid"

@EntityRepository(New)
export default class NewsRepository extends Repository<New>  {

    public async find(): Promise<New[]> {        
        return await getConnection().query('SELECT * FROM "news"')
    }


    public async saveNew(item: NewImage): Promise<New> {
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into("news")
        .values([
            {   id: unique(),title: item.title, text: item.text, img: item.img,
                creationdate: item.creationDate, published: item.published 
            }
        ])
        .execute()
        return new New()
    }
}
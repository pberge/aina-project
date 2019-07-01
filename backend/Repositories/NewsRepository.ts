import { New } from "../Models/New"
import { Repository, EntityRepository, getConnection } from "typeorm";


@EntityRepository(New)
export default class NewsRepository extends Repository<New>  {

    public async find(): Promise<New[]> {        
        return await getConnection().query('SELECT * FROM "news"')
    }
}
import { Text } from "../Models/Text"
import { TextImage } from "../Models/TextImage"
import { Repository, EntityRepository, getConnection } from "typeorm";
import unique from "uniqid"

@EntityRepository(Text)
export default class TextsRepository extends Repository<Text>  {

    public async find(): Promise<Text[]> {
        return await getConnection().query('SELECT * FROM texts')
    }

    public async findById(id: string): Promise<Text> {        
        let res =  await getConnection()
        .createQueryBuilder()
        .select()
        .from("texts", "texts")
        .where("id = :id", { id: id })
        .execute()

        return res[0]
    }


    public async saveText(item: TextImage): Promise<Text> {
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into("texts")
        .values([
            {   id: unique(),  
                text: item.text, 
                autor: item.autor
            }
        ])
        .execute()
        return new Text()
    }

    public async editText(item: Text): Promise<Text> {
        await getConnection()
        .createQueryBuilder()
        .update("texts")
        .set({ 
            id: item.id, 
            text: item.text, 
            autor: item.autor
        } as any)
        .where("id = :id", { id: item.id })
        .execute()

        console.log("save repository")
        return item
    }

    public async deleteText(id: string): Promise<Text> {
        await getConnection()
        .createQueryBuilder()
        .delete()
        .from("texts")
        .where("id = :id", { id: id })
        .execute()

        return new Text()
    }
}
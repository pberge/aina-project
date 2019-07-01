import axios from "axios"
import New from "./models/NewModel"

const url = "http://localhost:3000/"

export default {

    News: {
        async getAllNews(): Promise<New[]> {
            return await axios.get(url+"news")
        },
        async createNew(item: New): Promise<New> {
            return await axios.post(url+"news", item)
        }
    }
}
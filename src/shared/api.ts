import axios from "axios"
import New from "./models/new"

const url = "http://localhost:3000/"

export default {

    News: {
        async getAllNews(): Promise<New[]> {
            return await axios.get(url+"news")
        }
    }
}
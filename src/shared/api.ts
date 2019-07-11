import axios from "axios"

const url = "http://localhost:3000/"

export default {

    News: {
        async getAllNews(): Promise<any> {
            let a = await axios.get(url+"news")

            return a.data
        }
    }
}
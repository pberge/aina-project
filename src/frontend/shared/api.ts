import axios from 'axios'

const url = process.env.PORT ? 'https://ainaweb.herokuapp.com/api' : 'http://localhost:3000/api/'

export default {

  News: {
    async getAllNews (): Promise<any> {
      let a = await axios.get(url + 'news')

      return a.data
    },
    async getNewById (id: string): Promise<any> {
      let a = await axios.get(url + 'new-by-id', { params: { id: id } })

      return a.data
    }
  }
}
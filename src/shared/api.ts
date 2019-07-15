import axios from 'axios'

const url = 'http://localhost:3000/'

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

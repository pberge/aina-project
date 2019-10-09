import axios from 'axios'
import New from './models/NewModel'
import FormData from 'form-data'

const url = ( process.env.NODE_ENV === 'development' ) ? 'http://localhost:3000/api/' : 'https://ainaweb.herokuapp.com/api/'

export default {
  News: {
    async getAllNews (): Promise<New[]> {
      return axios.get(url + 'news')
    },
    async createNew (item: New): Promise<New> {
      let data: FormData = new FormData()
      data.append('title', item.title)
      data.append('text', item.text)
      data.append('img', item.img)
      data.append('published', item.published)
      data.append('creationDate', item.creationDate)

      const config = { headers: { 'Content-Type': 'multipart/form-data' } }

      return await axios.post(url + 'news', data, config)
    },
    async deleteNew (id: string): Promise<boolean> {
      await axios.delete(url + 'news', { params: { id: id } })
      return true
    },
    async getNewById (id: string): Promise<any> {
      let a = await axios.get(url + 'new-by-id', { params: { id: id } })
      return a.data
    }
  }
}

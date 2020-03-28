import axios from 'axios'

const url = ( process.env.NODE_ENV === 'development' ) ? 'http://localhost:3000/api/' : 'http://aina.ad:3000/api/'

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
  },
  Prices: {
    async getPrices (): Promise<any> {
      let a = await axios.get(url + 'prices')
      return a.data
    }
  },
  Donacions: {
    async getAllDonacions (): Promise<any> {
      let a = await axios.get(url + 'donacions')
      return a.data
    }
  }

}

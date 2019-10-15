import axios from 'axios'
import New from './models/NewModel'
// import Price from './models/Price'
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
    },
    async saveNew (item: New): Promise<any> {
      let data: FormData = new FormData()
      data.append('id', item.id)
      data.append('title', item.title)
      data.append('text', item.text)
      data.append('img', item.img)
      data.append('published', item.published)
      data.append('creationDate', item.creationDate)

      const config = { headers: { 'Content-Type': 'multipart/form-data' } }

      return await axios.put(url + 'news', data, config)
    }
  },
  Prices: {
    async getPrices (): Promise<any> {
      let a = await axios.get(url + 'prices')
      return a.data
    },
    async editPrices (items: any[]): Promise<any> {

      const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }

      let dataCasa: FormData = new FormData()
      dataCasa.append('name', 'laCasa')
      dataCasa.append('sleep', items[0][0].price)
      dataCasa.append('bedandbreakfast', items[0][1].price)
      dataCasa.append('halfpension',items[0][2].price)
      dataCasa.append('fullboard', items[0][3].price)
      
      await axios.put(url + 'prices', dataCasa, config)

      let dataBorda: FormData = new FormData()
      dataBorda.append('name', 'laBorda')
      dataBorda.append('sleep', items[1][0].price)
      dataBorda.append('bedandbreakfast', items[1][1].price)
      dataBorda.append('halfpension',items[1][2].price)
      dataBorda.append('fullboard', items[1][3].price)
      
      await axios.put(url + 'prices', dataBorda, config)

      let dataCaseta: FormData = new FormData()
      dataCaseta.append('name', 'woodHouse')
      dataCaseta.append('sleep', items[2][0].price)
      dataCaseta.append('bedandbreakfast', items[2][1].price)
      dataCaseta.append('halfpension',items[2][2].price)
      dataCaseta.append('fullboard', items[2][3].price)
      
      await axios.put(url + 'prices', dataCaseta, config)

      let dataSanSerni: FormData = new FormData()
      dataSanSerni.append('name', 'sanSerni')
      dataSanSerni.append('sleep', items[3][0].price)
      dataSanSerni.append('bedandbreakfast', 0)
      dataSanSerni.append('halfpension', 0)
      dataSanSerni.append('fullboard', 0)
      
      await axios.put(url + 'prices', dataSanSerni, config)

      let dataMeritxell: FormData = new FormData()
      dataMeritxell.append('name', 'meritxell')
      dataMeritxell.append('sleep', items[4][0].price)
      dataMeritxell.append('bedandbreakfast', 0)
      dataMeritxell.append('halfpension', 0)
      dataMeritxell.append('fullboard', 0)
      
      await axios.put(url + 'prices', dataMeritxell, config)

    }
  }
}

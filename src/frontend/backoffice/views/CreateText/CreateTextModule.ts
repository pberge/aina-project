import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import Store from '@/frontend/store'

@Module({
  dynamic: true,
  store: Store,
  name: 'CreateTextModule',
  namespaced: true
})
export default class CreateTextModule extends VuexModule {
  public autor: string = ''
  public text: string = ''

  @Mutation setA (value: string) { this.autor = value }

  @Mutation setT (value: string) { this.text = value }

  @Action
  setAutor (autor: string) {
    this.context.commit('setA', autor)
    return autor
  }

  @Action
  setText (text: string) {
    this.context.commit('setT', text)
    return text
  }


  @Action
  async reset () {
    await this.context.commit('setA', '')
    await this.context.commit('setT', '')
  }
}

import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import Store from '@/frontend/store'

@Module({
  dynamic: true,
  store: Store,
  name: 'CreateNewModule',
  namespaced: true
})
export default class CreateNewModule extends VuexModule {
  public title: string = ''
  public text: string = ''
  public img: any = {}

  @Mutation setTtl (value: string) { this.title = value }

  @Mutation setTxt (value: string) { this.text = value }

  @Mutation setImg (value: any) { this.img = value }

  @Action
  setTitle (title: string) {
    this.context.commit('setTtl', title)
    return title
  }

  @Action
  setText (text: string) {
    this.context.commit('setTxt', text)
    return text
  }

  @Action
  async setImage (img: any) {
    await this.context.commit('setImg', img)
    return this.img
  }

  @Action
  async reset () {
    await this.context.commit('setImg', '')
    await this.context.commit('setTxt', '')
    await this.context.commit('setTtl', '')
  }
}

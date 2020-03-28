import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import Store from '@/frontend/store'

@Module({
  dynamic: true,
  store: Store,
  name: 'CreateDonacioModule',
  namespaced: true
})
export default class CreateDonacioModule extends VuexModule {
  public descripcio: string = ''
  public img: any = {}
  public imgColaborador: any = {}
  public nomColaborador: string = ''
  public esportColaborador: string = ''

  @Mutation setDesc (value: string) { this.descripcio = value }

  @Mutation setNom (value: string) { this.nomColaborador = value }

  @Mutation setE (value: string) { this.esportColaborador = value }

  @Mutation setImg (value: any) { this.img = value }

  @Mutation setImgC (value: any) { this.imgColaborador = value }

  @Action
  setDescripcio (descripcio: string) {
    this.context.commit('setDesc', descripcio)
    return descripcio
  }

  @Action
  setNomColaborador (nom: string) {
    this.context.commit('setNom', nom)
    return nom
  }

  @Action
  setEsportColaborador (nom: string) {
    this.context.commit('setE', nom)
    return nom
  }

  @Action
  setImageColaborador (img: any) {
    this.context.commit('setImgC', img)
    return img
  }

  @Action
  setImage (img: any) {
    this.context.commit('setImg', img)
    return img
  }

  @Action
  async reset () {
    await this.context.commit('setImg', '')
    await this.context.commit('setDesc', '')
    await this.context.commit('setNom', '')
    await this.context.commit('setImgC', '')
    await this.context.commit('setE', '')
  }
}

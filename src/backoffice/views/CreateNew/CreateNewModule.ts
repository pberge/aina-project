import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators'
import Store from '../../../store'

@Module({
    dynamic: true,
    store: Store,
    name: 'CreateNewModule',
    namespaced: true
})
export default class CreateNewModule extends VuexModule {
    public title: string = ""
    public text: string = ""
    public img: any = {}

    @Mutation setTtl(value: string) {this.title = value}

    @Mutation setTxt(value: string) {this.text = value}

    @Mutation setImg(value: any) {this.img = value}

    @Action({commit: 'setTtl'})
    setTitle(title: string) {
        this.context.commit('setTtl', title)
        return title
    }

    @Action({commit: 'setTxt'})
    setText(text: string) {
        this.context.commit('setTxt', text)
        return text
    }

    @Action({commit: 'setImg'})
    async setImage(img: any) {
        await this.context.commit('setImg', img)
        return this.img
    }
}

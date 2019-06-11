import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators' 

@Module
export default class CreateNew extends VuexModule {
    title: string = ""
    text: string = ""
    img: string = ""

    @Mutation setTtl(value: string) {this.title = value}

    @Mutation setTxt(value: string) {this.text = value}

    @Mutation setImg(value: string) {this.img = value}

    @Action({commit: 'setTtl'})
    setTitle(title: string) {
        this.context.commit('setTtl', title);
        return title
    }

    @Action({commit: 'setTxt'})
    setText(text: string) {
        this.context.commit('setTxt', text);
        return text
    }

    @Action({commit: 'setImg'})
    setImage(img: string) {
        this.context.commit('setImg', img);
        return img
    }
}

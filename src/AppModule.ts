import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators'
import Store from './store'

@Module({
    dynamic: true,
    store: Store,
    name: 'AppModule',
    namespaced: true
})
export default class AppModule extends VuexModule {
    public logged: boolean = false

    @Mutation setLogged(value: boolean) {this.logged = true}

    @Action({commit: 'setLogged'})
    Login(title: string) {
        this.context.commit('setLogged', true);
    }

}

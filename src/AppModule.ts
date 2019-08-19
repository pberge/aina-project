import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import Store from './store'

@Module({
    dynamic: true,
    store: Store,
    name: 'AppModule',
    namespaced: true
})
export default class AppModule extends VuexModule {
    public logged: boolean = false
    public sideBarActive: boolean = false

    @Mutation setLogged(value: boolean) {this.logged = false}

    @Action
    Login(title: string) {
        this.context.commit('setLogged', true);
    }

    @Mutation setSideBar(value: boolean) {this.sideBarActive = value}

    @Action
    SideBar(value: boolean) {
        this.context.commit('setSideBar', value);
    }

}

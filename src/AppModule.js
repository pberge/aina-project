import * as tslib_1 from "tslib";
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import Store from '@/store';
let AppModule = class AppModule extends VuexModule {
    constructor() {
        super(...arguments);
        this.logged = false;
    }
    setLogged(value) { this.logged = true; }
    Login(title) {
        this.context.commit('setLogged', true);
    }
};
tslib_1.__decorate([
    Mutation
], AppModule.prototype, "setLogged", null);
tslib_1.__decorate([
    Action({ commit: 'setLogged' })
], AppModule.prototype, "Login", null);
AppModule = tslib_1.__decorate([
    Module({
        dynamic: true,
        store: Store,
        name: 'AppModule',
        namespaced: true
    })
], AppModule);
export default AppModule;
//# sourceMappingURL=AppModule.js.map
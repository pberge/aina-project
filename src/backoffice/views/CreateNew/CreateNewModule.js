import * as tslib_1 from "tslib";
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import Store from '@/store';
let CreateNewModule = class CreateNewModule extends VuexModule {
    constructor() {
        super(...arguments);
        this.title = "";
        this.text = "";
        this.img = {};
    }
    setTtl(value) { this.title = value; }
    setTxt(value) { this.text = value; }
    setImg(value) { this.img = value; }
    setTitle(title) {
        this.context.commit('setTtl', title);
        console.log("MODULE: ", this.title);
        return title;
    }
    setText(text) {
        this.context.commit('setTxt', text);
        return text;
    }
    setImage(img) {
        this.context.commit('setImg', img);
        return img;
    }
    get random() {
        return "a";
    }
};
tslib_1.__decorate([
    Mutation
], CreateNewModule.prototype, "setTtl", null);
tslib_1.__decorate([
    Mutation
], CreateNewModule.prototype, "setTxt", null);
tslib_1.__decorate([
    Mutation
], CreateNewModule.prototype, "setImg", null);
tslib_1.__decorate([
    Action({ commit: 'setTtl' })
], CreateNewModule.prototype, "setTitle", null);
tslib_1.__decorate([
    Action({ commit: 'setTxt' })
], CreateNewModule.prototype, "setText", null);
tslib_1.__decorate([
    Action({ commit: 'setImg' })
], CreateNewModule.prototype, "setImage", null);
CreateNewModule = tslib_1.__decorate([
    Module({
        dynamic: true,
        store: Store,
        name: 'CreateNewModule',
        namespaced: true
    })
], CreateNewModule);
export default CreateNewModule;
//# sourceMappingURL=CreateNewModule.js.map
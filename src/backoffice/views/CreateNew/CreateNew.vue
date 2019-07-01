<template>
  <div class="create-new">
    <div class="title-container">
      <span class="title">Títol</span>
      <input type="text" class="input-title" v-model="titleInput" placeholder="Títol">
    </div>
    <div class="text-container">
      <span class="title">Text</span>
      <TextEditor />
    </div>
    <div>
      <span class="title">Foto</span>
      <ImageUploader />
    </div>
    <div class="buttons-container row end-xs">
      <router-link class="btn btn-cancel" to="/admin/news">Cancel·lar</router-link>
      <a class="btn btn-ok" @click="createNew">Acceptar</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import NewModel from "../../../backoffice/shared/models/NewModel"
import TextEditor from "./components/TextEditor.vue"
import ImageUploader from "./components/ImageUploader.vue"
import axios from "axios"
import { getModule, Action } from "vuex-module-decorators"
import CreateNewModule from "./CreateNewModule"
import Store from "../../../store"
import New from '../../shared/models/NewModel'
import api from '../../shared/api'
import moment from "moment"

const createNewState = getModule(CreateNewModule, Store)

@Component({
  components: {
    TextEditor,
    ImageUploader
  }
})
export default class CreateNew extends Vue {

  get titleInput() {
    return createNewState.title
  }

  set titleInput(title: string) {
    createNewState.setTitle(title)
  }

  async createNew() {
    let item: New = {
      title: createNewState.title,
      text: createNewState.text,
      img: createNewState.img,
      published: false,
      creationDate: moment().format()
    }
    let res = await api.News.createNew(item)
    return res
  }
}
</script>

<style scoped>
.title-container {
  width: 90%;
  margin-bottom: 2em;
}

.title {
  display: block;
  margin-bottom: 0.5em;
  font-size: 1.5em;
}

.input-title {
  display: block;
  padding: 0.5em;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #0000008f;
}

.text-container {
  margin-bottom: 2em;
}

.buttons-container {
  margin: 0;
}
</style>
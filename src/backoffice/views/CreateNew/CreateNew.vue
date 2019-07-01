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
import { getModule } from "vuex-module-decorators"
import CreateNewModule from "./CreateNewModule"
import Store from "../../../store"

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

  createNew() {
    let newModel: NewModel = {
      title: createNewState.title,
      text: createNewState.text,
      img: createNewState.img,
      date: "",
      published: false
    }

    let fd = new FormData()
    fd.append("image", createNewState.img, createNewState.img.name)
    fd.append("title", createNewState.title)
    fd.append("text", createNewState.text)

    axios.post("http://localhost:51736/api/news", 
      fd)
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
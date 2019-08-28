<template>
  <div class="create-new" :class="{'no-events': isLoading}">
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
    <Spinner v-if="isLoading"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TextEditor from './components/TextEditor.vue'
import ImageUploader from './components/ImageUploader.vue'
import { getModule } from 'vuex-module-decorators'
import CreateNewModule from './CreateNewModule'
import Store from '@/frontend/store'
import New from '../../shared/models/NewModel'
import api from '../../shared/api'
import moment from 'moment'
import Spinner from '../../shared/components/Spinner.vue'

const createNewState = getModule(CreateNewModule, Store)

@Component({
  components: {
    TextEditor,
    ImageUploader,
    Spinner
  }
})
export default class CreateNew extends Vue {
  isLoading: boolean = false

  get titleInput () {
    return createNewState.title
  }

  set titleInput (title: string) {
    createNewState.setTitle(title)
  }

  async createNew () {
    this.isLoading = true
    let item: New = {
      title: createNewState.title,
      text: createNewState.text,
      img: createNewState.img,
      published: false,
      creationDate: moment().locale('es').format('L')
    }
    await api.News.createNew(item)
    this.isLoading = false

    this.$router.push('news')
  }
}
</script>

<style scoped>
.title-container {
  width: 90%;
  margin-bottom: 2em;
}

.no-events {
  pointer-events: none;
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

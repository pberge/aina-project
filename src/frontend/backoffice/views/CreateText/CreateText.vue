<template>
  <div class="create-text" :class="{'no-events': isLoading}">
    <div class="title-container">
      <span class="title">Autor</span>
      <input type="text" class="input-title" v-model="autorInput" placeholder="Autor">
    </div>
    <div class="title-container">
      <span class="title">Text</span>
      <input type="text" class="input-title" v-model="textInput" placeholder="Text">
    </div>
    <div class="buttons-container row end-xs">
      <router-link class="btn btn-cancel" to="/admin/texts">Cancel·lar</router-link>
      <a class="btn btn-ok" @click="createText">Acceptar</a>
    </div>
    <Spinner v-if="isLoading"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import CreateTextModule from './CreateTextModule'
import Store from '@/frontend/store'
import Text from '../../shared/models/TextModel'
import api from '../../shared/api'
import Spinner from '../../shared/components/Spinner.vue'

const createTextModule = getModule(CreateTextModule, Store)

@Component({
  components: {
    Spinner
  }
})
export default class CreateText extends Vue {
  isLoading: boolean = false

  get autorInput () {
    return createTextModule.autor
  }

  set autorInput (autor: string) {
    createTextModule.setAutor(autor)
  }

  get textInput () {
    return createTextModule.text
  }

  set textInput (text: string) {
    createTextModule.setText(text)
  }

  

  async createText () {
    this.isLoading = true
    let item: Text = {
      autor: createTextModule.autor,
      text: createTextModule.text,
    }
    await api.Texts.createText(item)
    this.isLoading = false

    this.$router.push('texts')
    await createTextModule.reset()
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

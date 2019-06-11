<template>
  <div class="create-new">
    <div class="title-container">
      <span class="title">Títol</span>
      <input type="text" class="input-title" v-model="message" placeholder="Títol"/>
    </div>
    <div class="text-container">
      <span class="title">Text</span>
      <TextEditor />
    </div>
    <div>
      <span class="title">Foto</span>
      <input type="file" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, Action, Getter } from 'vuex-class'
import NewModel from '@/shared/models/NewModel'
import TextEditor from './components/TextEditor.vue'

@Component({
  components: {
    TextEditor
  }
})
export default class CreateNew extends Vue {
  @State('title') title: string
  @Action('setTitle') setTitle: (value: string) => string
  
  get message() {
    return this.title
  }

  set message(title:string) {
    this.setTitle(title)
  }

  mounted() {
  }

}
</script>

<style>

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

</style>
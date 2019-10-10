<template>
  <div class="create-new" :class="{'no-events': isLoading}">
    <div v-if="!isLoading">
      <div class="title-container">
        <span class="title">Títol</span>
        <input type="text" class="input-title" v-model="titleInput" placeholder="Títol">
      </div>
      <div class="text-container">
        <span class="title">Text</span>
        <TextEditor :isEdition="true"/>
      </div>
      <div>
        <span class="title">Foto</span>
        <ImageUploader :isEdition="true"/>
      </div>
      <div class="buttons-container row end-xs">
        <router-link class="btn btn-cancel" to="/admin/news">Cancel·lar</router-link>
        <a class="btn btn-ok" :class="{'btn-disabled': isButtonDisabled}" @click="saveNew">Guardar</a>
      </div>
    </div>
    <Spinner v-if="isLoading"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TextEditor from '../../shared/components/TextEditor.vue'
import ImageUploader from '../../shared/components/ImageUploader.vue'
import { getModule } from 'vuex-module-decorators'
import EditNewModule from './EditNewModule'
import Store from '@/frontend/store'
import New from '../../shared/models/NewModel'
import api from '../../shared/api'
import moment from 'moment'
import Spinner from '../../shared/components/Spinner.vue'

const editNewModule = getModule(EditNewModule, Store)

@Component({
  components: {
    TextEditor,
    ImageUploader,
    Spinner
  }
})
export default class EditNew extends Vue {
  isLoading: boolean = true
  item: New
  id: string;

  async created () {
    await api.News.getNewById(this.$route.params.id).then(res => {
      this.item = res

      editNewModule.setTitle(this.item.title)
      editNewModule.setText(this.item.text)
      if(this.item.img != '') {
          let imgSplit = this.item.img.split('upload')
          this.item.img = imgSplit[0] + 'upload/c_scale,q_auto:eco,w_1000' + imgSplit[1]
          editNewModule.setImage(this.item.img)
      }
      this.isLoading = false
    })
  }

  get titleInput () {
    return editNewModule.title
  }

  set titleInput (title: string) {
    editNewModule.setTitle(title)
  }

  async saveNew () {
    this.isLoading = true
    console.log(this.$route.params.id)
    let item: New = {
      id: this.$route.params.id,
      title: editNewModule.title,
      text: editNewModule.text,
      img: editNewModule.img,
      published: false,
      creationDate: moment().locale('es').format('L')
    }
    
    await api.News.saveNew(item)
    this.isLoading = false

    this.$router.push('news')
    await editNewModule.reset()
  }

  get isButtonDisabled () {
    return editNewModule.title == '' || editNewModule.text == ''
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

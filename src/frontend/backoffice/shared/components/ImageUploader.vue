<template>
  <div class="image-uploader">
    <div class="row uploader-container">
      <label for="file-upload" class="custom-file-upload row">
        Seleccionar foto
      </label>
    </div>
    <input id="file-upload" type="file" v-on:change="onImageChange" accept="image/gif, image/jpeg, image/png" />
    <img :src="dataUrl" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import CreateNewModule from '../../views/CreateNew/CreateNewModule'
import EditNewModule from '../../views/EditNew/EditNewModule'
import Store from '@/frontend/store'

@Component({})
export default class ImageUploader extends Vue {
  @Prop() isEdition: boolean
  state: any = this.isEdition ? getModule(EditNewModule, Store) : getModule(CreateNewModule, Store)

  image: any = {}
  dataUrl: string = ''
  reader: any

  mounted () {
    this.dataUrl = ''
    this.image = {}

    this.state.reset()

    if(this.state.img != '') this.dataUrl = this.state.img
    
    this.reader = new FileReader()
    this.reader.onload = (e: any) => {
      this.dataUrl = this.reader.result
    }
  }

  async onImageChange (e: any) {
    var files = e.target.files || e.dataTransfer.files
    if (!files.length) {
      return
    }
    this.reader.readAsDataURL(files[0])
    this.image = files[0]
  }

  @Watch('dataUrl')
  onDataUrlSet () {
    this.state.setImage(this.dataUrl)
  }
}
</script>

<style scoped>
input {
  display: none;
}

.uploader-container {
  margin:0;
  margin-bottom: 1em;
}

.custom-file-upload {
  border: 1px solid #00bcd4;
  border-radius: 3px;
  padding: 0.5em;
  cursor: pointer;
  margin: 0;
  align-items: center;
}

.custom-file-upload:hover {
  background-color: #00bcd4;
  color: white;
}

.image-name {
  padding: 1em;
  font-size: 14px;
}

img {
  width: 50%;
  display: block;
  border-radius: 3px;
}

</style>

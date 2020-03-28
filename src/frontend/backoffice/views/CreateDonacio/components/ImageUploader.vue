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
import CreateDonacioModule from '../CreateDonacioModule'
import Store from '@/frontend/store'

@Component({})
export default class ImageUploader extends Vue {
  @Prop() isEdition: boolean
  @Prop() type: string
  state: any = this.isEdition ? null : getModule(CreateDonacioModule, Store)

  image: any = {}
  dataUrl: string = ''
  reader: any

  mounted () {
    console.log(this.type)
    this.dataUrl = ''
    this.image = {}

    if(!this.isEdition) this.state.reset()

    if(this.type == "object") {
      if(this.state.img != '') this.dataUrl = this.state.img
      
      this.reader = new FileReader()
      this.reader.onload = (e: any) => {
        this.dataUrl = this.reader.result
      }
    }
    else {
      if(this.state.imgColaborador != '') this.dataUrl = this.state.imgColaborador
      
      this.reader = new FileReader()
      this.reader.onload = (e: any) => {
        this.dataUrl = this.reader.result
      }
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
    console.log(this.type)
    if(this.type == "object") this.state.setImage(this.dataUrl)
    else this.state.setImageColaborador(this.dataUrl)
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

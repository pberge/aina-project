<template>
  <div class="image-uploader">
    <div class="row uploader-container">
      <label for="file-upload" class="custom-file-upload row">
        Seleccionar foto
      </label>
      <span class="image-name" v-if="image">{{image.name}}</span>
    </div>
    <!-- <VueBase64FileUpload  
        class="v1"
        accept="image/png,image/jpeg"
        image-class="v1-image"
        input-class="v1-input"
        @file="onFile"/> -->
        <!-- :max-size="customImageMaxSize" -->
        <!-- @size-exceeded="onSizeExceeded" -->
        <!--  -->
       
    <input id="file-upload" type="file" v-on:change="onImageChange" accept="image/gif, image/jpeg, image/png" />
    <!-- <img :src="imageURL" /> -->

  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import { getModule } from "vuex-module-decorators"
import CreateNewModule from "../CreateNewModule"
import Store from "../../../../store"
import * as VueBase64FileUpload  from "vue-base64-file-upload"

const createNewState = getModule(CreateNewModule, Store)
// const VueBase64FileUpload = require('vue-base64-file-upload')

@Component({
  components: {
     VueBase64FileUpload
  }
})
export default class ImageUploader extends Vue {

  imageURL: string = ""
  image: any = {}
  dataUrl: any = ""
  reader: any

  mounted() {
    this.reader = new FileReader()
    this.reader.onload = (e: any) => {
      this.dataUrl = this.reader.result
    }
  }

  async onImageChange(e: any) {
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length){
      return
    }
    this.reader.readAsDataURL(files[0])
    this.image = files[0]

  }

  @Watch('dataUrl')
  onDataUrlSet() {
    createNewState.setImage(this.dataUrl)
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

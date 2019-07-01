<template>
  <div class="image-uploader">
    <div class="row uploader-container">
      <label for="file-upload" class="custom-file-upload row">
        Seleccionar foto
      </label>
      <span class="image-name" v-if="image">{{image.name}}</span>
    </div>
    <input id="file-upload" type="file" v-on:change="onImageChange" accept="image/gif, image/jpeg, image/png" />
    <img :src="imageURL" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import CreateNewModule from "../CreateNewModule"
import Store from "../../../../store"
import { getModule } from "vuex-module-decorators"

const createNewState = getModule(CreateNewModule, Store)

@Component({})
export default class ImageUploader extends Vue {

  imageURL: string = ""
  image: any = {}

  onImageChange(e: any) {
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length)
      return
    this.imageURL = URL.createObjectURL(files[0])
    createNewState.setImage(files[0])
    this.image = files[0]
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

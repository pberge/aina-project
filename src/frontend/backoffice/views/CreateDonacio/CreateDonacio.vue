<template>
  <div class="create-new" :class="{'no-events': isLoading}">
    <div class="title-container">
      <span class="title">Descripció objecte</span>
      <input type="text" class="input-title" v-model="descripcioInput" placeholder="Títol">
    </div>
    <div>
      <span class="title">Foto objecte</span>
      <div class="image-uploader">
        <div class="row uploader-container">
          <label for="file-upload" class="custom-file-upload row">
            Seleccionar foto
          </label>
        </div>
        <input class="input-photo" id="file-upload" type="file" v-on:change="onImageChange" accept="image/gif, image/jpeg, image/png" />
        <img :src="dataUrl" />
      </div>
    </div>
    <div class="title-container">
      <span class="title">Nom col·laborador</span>
      <input type="text" class="input-title" v-model="nomInput" placeholder="Títol">
    </div>
    <div class="title-container">
      <span class="title">Esport</span>
      <input type="text" class="input-title" v-model="esportInput" placeholder="Títol">
    </div>
    <div>
      <span class="title">Foto col·laborador</span>
      <div class="image-uploader">
        <div class="row uploader-container">
          <label for="file-upload-col" class="custom-file-upload row">
            Seleccionar foto
          </label>
        </div>
        <input class="input-photo" id="file-upload-col" type="file" v-on:change="onImageColaboradorChange" accept="image/gif, image/jpeg, image/png" />
        <img :src="dataUrlCol" />
      </div>
    </div>
    <div class="buttons-container row end-xs">
      <router-link class="btn btn-cancel" to="/admin/donacions">Cancel·lar</router-link>
      <a class="btn btn-ok" :class="{'btn-disabled': isButtonDisabled}" @click="createDonacio">Acceptar</a>
    </div>
    <Spinner v-if="isLoading"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import ImageUploader from './components/ImageUploader.vue'
import { getModule } from 'vuex-module-decorators'
import CreateDonacioModule from './CreateDonacioModule'
import Store from '@/frontend/store'
import Donacio from '../../shared/models/DonacioModel'
import api from '../../shared/api'
import Spinner from '../../shared/components/Spinner.vue'

const createDonacioState = getModule(CreateDonacioModule, Store)

@Component({
  components: {
    ImageUploader,
    Spinner
  }
})
export default class CreateDonacio extends Vue {
  isLoading: boolean = false
  image: any = {}
  imageColaborador: any = {}
  dataUrlCol: string = ''
  dataUrl: string = ''
  reader: any
  readerCol: any

  mounted() {
    this.reader = new FileReader()
      this.reader.onload = (e: any) => {
        this.dataUrl = this.reader.result
      }

    this.readerCol = new FileReader()
      this.readerCol.onload = (e: any) => {
        this.dataUrlCol = this.readerCol.result
      }
      
  }

  get descripcioInput () {
    return createDonacioState.descripcio
  }

  set descripcioInput (descripcio: string) {
    createDonacioState.setDescripcio(descripcio)
  }

  get nomInput () {
    return createDonacioState.nomColaborador
  }

  set nomInput (nom: string) {
    createDonacioState.setNomColaborador(nom)
  }

  get esportInput () {
    return createDonacioState.esportColaborador
  }

  set esportInput (nom: string) {
    createDonacioState.setEsportColaborador(nom)
  }

  async createDonacio () {
    this.isLoading = true
    let item: Donacio = {
      descripcio: createDonacioState.descripcio,
      nomColaborador: createDonacioState.nomColaborador,
      esportColaborador: createDonacioState.esportColaborador,
      img: createDonacioState.img,
      imgColaborador: createDonacioState.imgColaborador
    }
    
    await api.Donacions.createDonacio(item)
    this.isLoading = false

    this.$router.push('donacions')
    await createDonacioState.reset()
  }

  async onImageChange (e: any) {
    var files = e.target.files || e.dataTransfer.files
    if (!files.length) {
      return
    }
    this.reader.readAsDataURL(files[0])
    this.image = files[0]
  }
  async onImageColaboradorChange (e: any) {
    var files = e.target.files || e.dataTransfer.files
    if (!files.length) {
      return
    }
    this.readerCol.readAsDataURL(files[0])
    this.imageColaborador = files[0]
  } 

  get isButtonDisabled () {
    return createDonacioState.descripcio == '' || createDonacioState.nomColaborador == ''
  }

  @Watch('dataUrl')
  onDataUrlSet () {
    createDonacioState.setImage(this.dataUrl)
  }

  @Watch('dataUrlCol')
  onDataUrlColSet () {
    createDonacioState.setImageColaborador(this.dataUrlCol)
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

.input-photo {
  display: none;
}

</style>

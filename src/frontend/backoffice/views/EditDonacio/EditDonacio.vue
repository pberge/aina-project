<template>
  <div class="create-new" :class="{'no-events': isLoading}">
    <div v-if="!isLoading">
      <div class="title-container">
        <span class="title">Descripció objecte</span>
        <input type="text" class="input-title" v-model="descripcioInput" placeholder="Títol">
      </div>
      <div>
        <span class="title">Foto objecte</span>
        <ImageUploader type="object"/>
      </div>
      <div class="title-container">
        <span class="title">Nom col·laborador</span>
        <input type="text" class="input-title" v-model="nomInput" placeholder="Nom">
      </div>
      <div class="title-container">
        <span class="title">Esport</span>
        <input type="text" class="input-title" v-model="esportInput" placeholder="Esport">
      </div>
      <div>
        <span class="title">Foto col·laborador</span>
        <ImageUploader type="colaborator"/>
      </div>
      <div class="buttons-container row end-xs">
        <router-link class="btn btn-cancel" to="/admin/donacions">Cancel·lar</router-link>
        <a class="btn btn-ok" :class="{'btn-disabled': isButtonDisabled}" @click="saveDonacio">Acceptar</a>
      </div>
    </div>
    <Spinner v-if="isLoading"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ImageUploader from '../../shared/components/ImageUploader.vue'
import { getModule } from 'vuex-module-decorators'
import EditDonacioModule from './EditDonacioModule'
import Store from '@/frontend/store'
import Donacio from '../../shared/models/DonacioModel'
import api from '../../shared/api'
import Spinner from '../../shared/components/Spinner.vue'

const editDonacioModule = getModule(EditDonacioModule, Store)

@Component({
  components: {
    ImageUploader,
    Spinner
  }
})
export default class EditDonacio extends Vue {
  isLoading: boolean = true
  item: Donacio
  id: string;

  async created () {
    await api.Donacions.getDonacioById(this.$route.params.id).then(res => {
      this.item = res

      editDonacioModule.setDescripcio(this.item.descripcio)
      editDonacioModule.setEsportColaborador(this.item.esportColaborador)
      editDonacioModule.setNom(this.item.nomColaborador)

      if(this.item.img != '') {
          let imgSplit = this.item.img.split('upload')
          this.item.img = imgSplit[0] + 'upload/c_scale,q_auto:eco,w_1000' + imgSplit[1]
          editDonacioModule.setImage(this.item.img)
      }

      if(this.item.imgColaborador != '') {
          let imgSplit = this.item.imgColaborador.split('upload')
          this.item.imgColaborador = imgSplit[0] + 'upload/c_scale,q_auto:eco,w_1000' + imgSplit[1]
          editDonacioModule.setImageColaborador(this.item.imgColaborador)
      }
      this.isLoading = false
    })
  }

  get descripcioInput () {
    return editDonacioModule.descripcio
  }

  set descripcioInput (descripcio: string) {
    editDonacioModule.setDescripcio(descripcio)
  }

  get nomInput () {
    return editDonacioModule.nomColaborador
  }

  set nomInput (nom: string) {
    editDonacioModule.setNomColaborador(nom)
  }

  get esportInput () {
    return editDonacioModule.esportColaborador
  }

  set esportInput (nom: string) {
    editDonacioModule.setEsportColaborador(nom)
  }

  async saveDonacio () {
    this.isLoading = true
    let item: Donacio = {
      descripcio: editDonacioModule.descripcio,
      nomColaborador: editDonacioModule.nomColaborador,
      esportColaborador: editDonacioModule.esportColaborador,
      img: editDonacioModule.img,
      imgColaborador: editDonacioModule.imgColaborador
    }
    
    await api.Donacions.saveDonacio(item)
    this.isLoading = false

    this.$router.replace('/admin/donacions')
    await editDonacioModule.reset()
  }

  get isButtonDisabled () {
    return false
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

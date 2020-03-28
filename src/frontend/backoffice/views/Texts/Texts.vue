<template>
  <div class="texts">
    <router-link class="btn btn-ok" to="/admin/create-text">Nou Text</router-link>
    <TextsTable :texts="texts" @deleteText="deleteText"/>
    <Spinner v-if="isLoading"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TextModel from '../../shared/models/TextModel'
import api from '../../shared/api'
import Spinner from '../../shared/components/Spinner.vue'
import TextsTable from './components/TextTable.vue'

@Component({
  components: {
    Spinner,
    TextsTable
  }
})
export default class Texts extends Vue {
  texts: TextModel[] = []
  isLoading: boolean = false

  mounted () {
    this.isLoading = true
    this.getTexts()
  }

  async getTexts () {
    await api.Texts.getAllTexts().then((response: any) => {
      this.texts = response.data
      console.log(this.texts)
      this.isLoading = false
    })
  }

  async deleteText (id: string) {
    this.isLoading = true
    await api.Texts.deleteText(id)
    this.getTexts()
  }
}
</script>

<style>

</style>

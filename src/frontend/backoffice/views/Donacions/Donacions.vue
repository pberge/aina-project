<template>
  <div class="donacions">
    <router-link class="btn btn-ok" to="/admin/create-donacio">Nou Objecte</router-link>
    <DonacionsTable :donacions="donacions" @deleteDonacio="deleteDonacio"/>
    <Spinner v-if="isLoading"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DonacionsTable from './components/DonacionsTable.vue'
import DonacioModel from '../../shared/models/DonacioModel'
import api from '../../shared/api'
import Spinner from '../../shared/components/Spinner.vue'

@Component({
  components: {
    DonacionsTable,
    Spinner
  }
})
export default class Donacions extends Vue {
  donacions: DonacioModel[] = []
  isLoading: boolean = false

  mounted () {
    this.isLoading = true
    this.getDonacions()
  }

  async getDonacions () {
    await api.Donacions.getAllDonacions().then((response: any) => {
      this.donacions = response.data
      this.isLoading = false
    })
  }

  async deleteDonacio (id: string) {
    this.isLoading = true
    await api.Donacions.deleteDonacio(id)
    this.getDonacions()
  }
}
</script>

<style>

</style>

<template>
  <div class="news">
    <router-link class="btn btn-ok" to="/admin/create-new">Nova notícia</router-link>
    <NewsTable :news="news" @deleteNew="deleteNew"/>
    <Spinner v-if="isLoading"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NewsTable from './components/NewsTable.vue'
import NewModel from '../../shared/models/NewModel'
import api from '../../shared/api'
import Spinner from '../../shared/components/Spinner.vue'

@Component({
  components: {
    NewsTable,
    Spinner
  }
})
export default class News extends Vue {
  news: NewModel[] = []
  isLoading: boolean = false

  mounted () {
    this.isLoading = true
    this.getNews()
  }

  async getNews () {
    await api.News.getAllNews().then(response => {
      this.news = response
      this.isLoading = false
    })
  }

  async deleteNew (id: string) {
    this.isLoading = true
    await api.News.deleteNew(id)
    this.getNews()
  }
}
</script>

<style>

</style>

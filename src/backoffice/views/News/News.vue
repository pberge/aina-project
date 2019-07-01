<template>
  <div class="news">
    <router-link class="btn btn-ok" to="/admin/create-new">Nova notícia</router-link>
    <NewsTable :news="news"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NewsTable from './components/NewsTable.vue'
import NewModel from '../../shared/models/NewModel'
import api from '../../shared/api'

@Component({
  components: {
    NewsTable
  }
})
export default class News extends Vue {
  news: NewModel[] = []

   mounted () {
    this.getNews()
  }

  async getNews(){
    await api.News.getAllNews().then(response => this.news = response.data)
  }
}
</script>

<style>

</style>

<template>
  <div class="news row">
    <Spinner v-if="isLoading"/>
    <router-link v-for="(item, i) in news" :key="i" :to="getRoute(item.id)">
      <NewsCard :newInfo="item" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import New from '../../shared/models/new'
import NewsCard from './components/NewsCard.vue'
import api from '../../shared/api'
import Spinner from '../../shared/components/Spinner.vue'

@Component({
  components: {
    NewsCard,
    Spinner
  }
})
export default class News extends Vue {
  news: New[] = [];
  isLoading: boolean = true

  async mounted () {
    this.news = await api.News.getAllNews()
    this.isLoading = false
  }

  getRoute (id: string) {
    return 'new-detail/' + id
  }
}
</script>

<style scoped>
.news {
  justify-content: center;
}

a {
  text-decoration: none;
  color: black;
}

a:visited { 
  text-decoration: none;
  color:black; 
}
</style>

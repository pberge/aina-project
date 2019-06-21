<template>
  <div class="news">
    <router-link class="btn btn-ok" to="/admin/create-new">Nova notícia</router-link>
    <NewsTable :news="news"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NewsTable from './components/NewsTable.vue'
import NewModel from '@/backoffice/shared/models/NewModel'

@Component({
  components: {
    NewsTable
  }
})
export default class News extends Vue {
  news: NewModel[] = []

  mounted () {
    this.news = [
      {'img': '', 'title': 'Preinscripcions online!', 'text': '', 'date': '23/06/2019', 'published': true},
      {'img': '', 'title': 'Preinscripcions online!', 'text': '', 'date': '', 'published': true},
      {'img': '', 'title': 'Preinscripcions online!', 'text': '', 'date': '', 'published': true},
      {'img': '', 'title': 'Preinscripcions online!', 'text': '', 'date': '', 'published': true}
    ]
  }
}
</script>

<style>
.news {

}



</style>

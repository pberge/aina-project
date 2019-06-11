<template>
  <div class="news">
    <router-link class="btn btn-ok" to="/create-new">Nova notícia</router-link>
    <NewsTable :news="news"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NewsTable from './components/NewsTable.vue'
import NewModel from '@/shared/models/NewModel'

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

.btn {
  color: initial;
  padding: 0.7em;
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
}

.btn-ok {
  border-color: #4caf50;
}

.btn-ok:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}

</style>

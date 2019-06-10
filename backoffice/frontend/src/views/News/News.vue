<template>
  <div class="news">
    <a class="btn btn-ok">Nova notícia</a>
    <NewsTable :news="news"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NewsTable from './components/NewsTable.vue'
import Notice from '@/shared/models/Notice'

@Component({
  components: {
    NewsTable
  }
})
export default class News extends Vue {
  news: Notice[] = []

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
  padding: 0.7em;
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

.btn-ok {
  border-color: #4caf50;
}

.btn-ok:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}

</style>

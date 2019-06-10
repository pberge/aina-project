<template>
  <div class="news-table">
    <table>
      <tr>
        <th>Títol</th>
        <th>Publicada</th>
        <th>Data creació</th>
        <th>Accions</th>
      </tr>
      <tr v-for="(notice, i) in news" :key="i">
        <td>{{notice.title}}</td>
        <td>{{notice.published}}</td>
        <td>{{notice.date}}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Notice from '@/shared/models/Notice'

@Component({
  components: {
  },
})
export default class NewsTable extends Vue {
  @Prop() news: Notice[]

}
</script>

<style>
.news-table {
  margin-top: 2em;
}

table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  padding: 0.8em;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>

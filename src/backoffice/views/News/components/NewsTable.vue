<template>
  <div class="news-table">
    <table>
      <tr>
        <th>Títol</th>
        <th>Publicada</th>
        <th>Data creació</th>
        <th>Accions</th>
      </tr>
      <tr v-for="(item, i) in news" :key="i">
        <td>{{item.title}}</td>
        <td>{{item.published}}</td>
        <td>{{item.date}}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import NewModel from '@/backoffice/shared/models/NewModel'

@Component({
  components: {
  },
})
export default class NewsTable extends Vue {
  @Prop() news!: NewModel[]

}
</script>

<style scoped>
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

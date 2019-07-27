<template>
  <div class="prices">
      <span class="title">La casa</span></br>
      <div class="row">
          <span>Habitacions de 6 </span><i class="material-icons">person</i>
      </div>
        <table>
            <tr>
                <th></th>
                <th>Preu</th>
            </tr>
            <tr>
                <td>Pensió complerta</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Mitja pensió</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Dormir i esmorzar</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Dormir</td>
                <td>4</td>
            </tr>
        </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Prices extends Vue {}
</script>

<style scoped>
.title {
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
}

.row {
    /* justify-content: center; */
    align-items: center;
    margin: 0;
    margin-bottom: 1em;
    opacity: 0.8;
    font-size: 0.8em;
}

.material-icons {
    font-size: 1.1em !important;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {background-color: #f2f2f2;}
</style>

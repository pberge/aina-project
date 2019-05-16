<template>
    <div class="prices">
        <table>
            <tr>
                <th/>
                <th>Casa</th>
                <th>Borda</th>
                <th>Borda Meritxell</th>
                <th>Casal Sant Serni</th>
            </tr>
            <tr>
                <td>Dormir</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Dormir i esmorzar</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Pensió complerta</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
      </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Prices extends Vue {

}
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  /* width: 100%; */
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  /* padding: 8px; */
  padding: 0.5em;
  width: 10em;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

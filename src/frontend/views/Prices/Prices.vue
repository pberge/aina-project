<template>
  <div class="prices">
    <span class="title">{{$t("prices.house")}}</span>
    <div class="row">
      <span>{{$t("prices.bedroom6")}}</span>
      <i class="material-icons">person</i>
    </div>
    <div class="row">
        <img class="image col-xs-5" src="https://res.cloudinary.com/ainacloud/image/upload/v1563209025/Facilities/GOPR7518_huleol.jpg"/>
        <table class="col-xs-5">
            <tr class="row">
                <th class="col-xs-8"></th>
                <th class="col-xs-4 price">{{$t("prices.price")}}</th>
            </tr>
            <tr v-for="(item,i) in laCasaPrices" :key="i" class="row">
                <td class="col-xs-8">{{$t("prices." + item.name)}}</td>
                <td class="col-xs-4 price">{{item.price}} €</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Prices extends Vue {
  laCasaPrices: any[] = [
    { name: 'fullboard', price: '31' },
    { name: 'halfpension', price: '26' },
    { name: 'bed&breakfast', price: '19' },
    { name: 'sleep', price: '16' }
  ]
}
</script>

<style scoped>
.title {
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
}

.row {
  align-items: center;
  margin: 0;
  margin-bottom: 1em;
  opacity: 0.8;
  font-size: 0.8em;
}

.material-icons {
  font-size: 1.1em !important;
}

.row {
    font-size: 0.9em !important;
}

table {
  border-collapse: collapse;
  width: 20em;
  margin-left: 2em;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.price {
    text-align: center;
}

.image {
    max-height: 19em;
}

@media (max-width: 676px) { /*MOBILE*/
  .image {
    flex-basis: 100%;
    max-width: 100%;
    margin-bottom: 1em;
  }

  table {
    flex-basis: 100%;
    max-width: 100%;
    margin: 0;
  }
}

</style>

<template>
  <div class="item-prices">
    <span class="title">{{title}}</span>
    <div class="row">
      <span>{{numHabs !== '1' ? numHabs : ''}} {{$t("prices.bedroom") }} {{ peoplePerHab}}</span>
      <i class="material-icons">person</i>
    </div>
    <div class="row">
        <img class="image col-xs-5" :src="img"/>
        <table class="col-xs-5">
            <tr class="row">
                <th class="col-xs-8"></th>
                <th class="col-xs-4 price">{{$t("prices.price")}}</th>
            </tr>
            <tr v-for="(item,i) in prices" :key="i" class="row">
                <td class="col-xs-8">{{$t("prices." + item.name)}}</td>
                <td class="col-xs-4 price">{{item.price}} €</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ItemPrice extends Vue {
    @Prop() prices: any[]
    @Prop() peoplePerHab: number
    @Prop() numHabs: number
    @Prop() title: string
    @Prop() img: string

}
</script>

<style scoped>
.item-prices {
    text-align: center;
    padding-top: 1em;
    padding-bottom: 2em;
}

.title {
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
}

.row {
  align-items: center;
  margin: 0;
  margin-bottom: 1em;
  font-size: 0.8em;
}

.material-icons {
  font-size: 1.1em !important;
}

.row {
    font-size: 0.9em !important;
    justify-content: center;
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
    max-width: 40em;
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

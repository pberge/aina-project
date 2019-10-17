<template>
  <div class="prices">
    <ItemPrice
      :prices="laCasaPrices"
      peoplePerHab="6"
      numHabs="1"
      title="La Casa"
      img="https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_700/v1568100709/Prices/casa.jpg"
    />
    <ItemPrice
      :prices="laBordaPrices"
      peoplePerHab="12"
      numHabs="1"
      title="La Borda"
      img="https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_700/v1568100640/Prices/Borda.jpg"
    />
    <ItemPrice
      :prices="casetaPrices"
      peoplePerHab="10"
      numHabs="1"
      title="La Caseta de fusta"
      img="https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_700/v1568100604/Prices/casetaFusta.jpg"
    />
    <ItemPrice
      :prices="sanSerniPrices"
      peoplePerHab="16"
      numHabs="2"
      title="Casal Sant Serni"
      img="https://res.cloudinary.com/ainacloud/image/upload/v1571303274/Prices/Entrada_SanSerni_gxr4kr.jpg"
    />
    <ItemPrice
      :prices="meritxellPrices"
      peoplePerHab="16"
      numHabs="2"
      title="Casal de Meritxell"
      img="https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_700/v1571297714/Prices/Meritxell.jpg"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ItemPrice from './components/ItemPrice.vue'

@Component({
  components: {
    ItemPrice
  }
})
export default class Prices extends Vue {
  laCasaPrices: any[] = [
    { name: 'fullboard', price: '31' },
    { name: 'halfpension', price: '26' },
    { name: 'bedandbreakfast', price: '19' },
    { name: 'sleep', price: '16' }
  ]
  laBordaPrices: any[] = [
    { name: 'fullboard', price: '31' },
    { name: 'halfpension', price: '26' },
    { name: 'bedandbreakfast', price: '19' },
    { name: 'sleep', price: '16' }
  ]
  casetaPrices: any[] = [
    { name: 'fullboard', price: '31' },
    { name: 'halfpension', price: '26' },
    { name: 'bedandbreakfast', price: '19' },
    { name: 'sleep', price: '16' }
  ]
  sanSerniPrices: any[] = [
    { name: 'sleep', price: '16' }
  ]
  meritxellPrices: any[] = [
    { name: 'sleep', price: '16' }
  ]
}
</script>

<style scoped>
@media (max-width: 676px) { /*MOBILE*/
  .prices {
    padding: 0;
  }
}
</style>

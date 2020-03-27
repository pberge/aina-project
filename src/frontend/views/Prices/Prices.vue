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
import api from '../../shared/api'

@Component({
  components: {
    ItemPrice
  }
})
export default class Prices extends Vue {

  laCasaPrices: any[] = []
  laBordaPrices: any[] = []
  casetaPrices: any[] = []
  sanSerniPrices: any[] = []
  meritxellPrices: any[] = []

  async created() {
    var data = await api.Prices.getPrices()
    var laCasa = data.find(e => e.id == 1)
    this.laCasaPrices = [
      { name: 'fullboard', price: laCasa.fullboard },
      { name: 'halfpension', price: laCasa.halfpension },
      { name: 'bedandbreakfast', price: laCasa.bedandbreakfast },
      { name: 'sleep', price: laCasa.sleep }
    ]
    var borda = data.find(e => e.id == 2)
    this.laBordaPrices = [
      { name: 'fullboard', price: borda.fullboard },
      { name: 'halfpension', price: borda.halfpension },
      { name: 'bedandbreakfast', price: borda.bedandbreakfast },
      { name: 'sleep', price: borda.sleep }
    ]
    var fusta = data.find(e => e.id == 3)
    this.casetaPrices = [
      { name: 'fullboard', price: fusta.fullboard },
      { name: 'halfpension', price: fusta.halfpension },
      { name: 'bedandbreakfast', price: fusta.bedandbreakfast },
      { name: 'sleep', price: fusta.sleep }
    ]
    var serni = data.find(e => e.id == 4)
    this.sanSerniPrices = [
      { name: 'sleep', price: serni.sleep }
    ]
    var meri = data.find(e => e.id == 5)
    this.meritxellPrices = [
      { name: 'sleep', price: meri.sleep }
    ]
  }
}
</script>

<style scoped>
@media (max-width: 676px) { /*MOBILE*/
  .prices {
    padding: 0;
  }
}
</style>

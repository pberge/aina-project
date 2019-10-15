<template>
  <div class="edit-price">
    <div class="item">
        <span class="title">La Casa</span>
        <table>
            <tr>
                <td>{{$t('prices.'+laCasaPrices[0].name)}}</td>
                <td>
                    <input type="number" v-model="laCasaPrices[0].price" @change="isModified"/> €
                </td>
            </tr>
            <tr>
                <td>{{$t('prices.'+laCasaPrices[1].name)}}</td>
                <td>
                    <input type="number" v-model="laCasaPrices[1].price" @change="isModified"/> €
                </td>
            </tr>
            <tr>
                <td>{{$t('prices.'+laCasaPrices[2].name)}}</td>
                <td>
                    <input type="number" v-model="laCasaPrices[2].price" @change="isModified"/> €
                </td>
            </tr>
            <tr>
                <td>{{$t('prices.'+laCasaPrices[3].name)}}</td>
                <td>
                    <input type="number" v-model="laCasaPrices[3].price" @change="isModified"/> €
                </td>
            </tr>
        </table>
    </div>
    <div class="item">
        <span class="title">La Borda</span>
        <table>
            <tr>
                <td>{{$t('prices.'+laBordaPrices[0].name)}}</td>
                <td>
                    <input type="number" v-model="laBordaPrices[0].price" @change="isModified"/> €
                </td>
            </tr>
            <tr>
                <td>{{$t('prices.'+laBordaPrices[1].name)}}</td>
                <td>
                    <input type="number" v-model="laBordaPrices[1].price" @change="isModified"/> €
                </td>
            </tr>
            <tr>
                <td>{{$t('prices.'+laBordaPrices[2].name)}}</td>
                <td>
                    <input type="number" v-model="laBordaPrices[2].price" @change="isModified"/> €
                </td>
            </tr>
            <tr>
                <td>{{$t('prices.'+laBordaPrices[3].name)}}</td>
                <td>
                    <input type="number" v-model="laBordaPrices[3].price" @change="isModified"/> €
                </td>
            </tr>
        </table>
    </div>
    <div class="item">
        <span class="title">La Caseta de fusta</span>
        <table>
            <tr>
                <td>{{$t('prices.'+casetaPrices[0].name)}}</td>
                <td>
                    <input type="number" v-model="casetaPrices[0].price" @change="isModified"/> €
                </td>
            </tr>
            <tr>
                <td>{{$t('prices.'+casetaPrices[1].name)}}</td>
                <td>
                    <input type="number" v-model="casetaPrices[1].price" @change="isModified"/> €
                </td>
            </tr>
            <tr>
                <td>{{$t('prices.'+casetaPrices[2].name)}}</td>
                <td>
                    <input type="number" v-model="casetaPrices[2].price" @change="isModified"/> €
                </td>
            </tr>
            <tr>
                <td>{{$t('prices.'+casetaPrices[3].name)}}</td>
                <td>
                    <input type="number" v-model="casetaPrices[3].price" @change="isModified"/> €
                </td>
            </tr>
        </table>
    </div>
    <div class="item">
        <span class="title">Casal Sant Serni</span>
        <table>
            <tr>
                <td>{{$t('prices.'+sanSerniPrices[0].name)}}</td>
                <td>
                    <input type="number" v-model="sanSerniPrices[0].price" @change="isModified"/> €
                </td>
            </tr>
        </table>
    </div>
    <div class="item">
        <span class="title">Casal de Meritxell</span>
        <table>
            <tr>
                <td>{{$t('prices.'+meritxellPrices[0].name)}}</td>
                <td>
                    <input type="number" v-model="meritxellPrices[0].price" @change="isModified"/> €
                </td>
            </tr>
        </table>
    </div>
    <div class="buttons-container row end-xs">
        <a class="btn btn-ok" :class="{'btn-disabled': !isButtonDisabled}" @click="savePrices">Guardar</a>
    </div>
    <Modal title="Guardat" text="S'han guardat els canvis" :buttonsDisabled="true" v-if="isModalActive"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import api from '../../shared/api'
import Modal from '../../shared/components/Modal.vue'

@Component({
    components: {
        Modal
    }
})
export default class EditPrice extends Vue {
  laCasaPrices: any[] = [
    { name: 'sleep', price: '' },
    { name: 'bedandbreakfast', price: '' },
    { name: 'halfpension', price: '' },
    { name: 'fullboard', price: '' }
  ]
  laBordaPrices: any[] = [
    { name: 'sleep', price: '' },
    { name: 'bedandbreakfast', price: '' },
    { name: 'halfpension', price: '' },
    { name: 'fullboard', price: '' }
  ]
  casetaPrices: any[] = [
    { name: 'sleep', price: '' },
    { name: 'bedandbreakfast', price: '' },
    { name: 'halfpension', price: '' },
    { name: 'fullboard', price: '' }
  ]
  sanSerniPrices: any[] = [
    { name: 'sleep', price: '' }
  ]
  meritxellPrices: any[] = [
    { name: 'sleep', price: '' }
  ]

  isButtonDisabled: boolean = false
  isModalActive: boolean = false

  async created () {
        let res = await api.Prices.getPrices()

        let a = res.filter(item => {
            return item.name == 'laCasa'
        })
        for(let item of this.laCasaPrices) {
            item.price = a[0][item.name]
            this.isButtonDisabled = false
        }

        let b = res.filter(item => {
            return item.name == 'laBorda'
        })
        for(let item of this.laBordaPrices) {
            item.price = b[0][item.name]
            this.isButtonDisabled = false
        }

        let c = res.filter(item => {
            return item.name == 'woodHouse'
        })
        for(let item of this.casetaPrices) {
            item.price = c[0][item.name]
            this.isButtonDisabled = false
        }

        let d = res.filter(item => {
            return item.name == 'sanSerni'
        })
        for(let item of this.sanSerniPrices) {
            item.price = d[0][item.name]
            this.isButtonDisabled = false
        }

        let e = res.filter(item => {
            return item.name == 'meritxell'
        })
        for(let item of this.meritxellPrices) {
            item.price = e[0][item.name]
            this.isButtonDisabled = false
        }

        this.isButtonDisabled = false
    }

    async savePrices() {
        let res = [this.laCasaPrices, this.laCasaPrices, this.casetaPrices, this.sanSerniPrices, this.meritxellPrices]
        await api.Prices.editPrices(res)
        this.isModalActive = true
        setTimeout(() => {
            this.isModalActive = false
            this.isButtonDisabled = false
        }, 2000)
    }

    isModified () {
        this.isButtonDisabled = true
    }
  
}
</script>

<style scoped>
.item {
    margin: 1em;
    margin-bottom: 2em;
}

.title {
    font-size: 1.5em;
    margin-bottom: 1em;
}

td {
    width: 40%;
}

input {
    padding: 0.7em;
    border-radius: 3px;
    border: 0.5px solid black;
    text-align: right;
}

.buttons-container {
  margin: 0;
}
</style>

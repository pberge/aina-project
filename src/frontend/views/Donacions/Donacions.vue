<template>
    <div>
      <div class="infoContainer">
        <div class="pageTitle">#JuntsPerAndorra</div>
        <div class="pageDescription">
          <span v-html="$t('donacions.text1')"></span>
        </div>
      </div>
      <div class="paymentLayout">
          <a class="btn btn-select" @click="showPaymentLayout">{{$t('donacions.participa')}}</a>
          
          <div class="participa" :class="{ 'hide': !isPaymenyLayoutShown}">
              <div class="row">
                <span class="number col-xs-1">1</span><span class="col-xs-11 instruccio">{{$t('donacions.instruccio1')}}</span>
              </div>
              <div class="banc-account">
                AD10 0003 1101 1022 8331 1508
              </div>
              <div class="row">
                <span class="number col-xs-1">2</span><span class="col-xs-11 instruccio">{{$t('donacions.instruccio2')}}</span>
              </div>
              <div class="email">
                  <a style="color: dimgrey;" href="mailto:juntsperandorra@gmail.com">juntsperandorra@gmail.com</a>
                </div>
              <div class="row">
                <span class="number col-xs-1">3</span><span class="col-xs-11 instruccio">{{$t('donacions.instruccio3')}}</span>
              </div>
              <div class="row">
                <span class="number col-xs-1">4</span><span class="col-xs-11 instruccio">{{$t('donacions.instruccio4')}}</span>
              </div>
          </div>
      </div>
      <div class="pageDescription footerinfo" style="text-align:center">
          <span v-html="$t('donacions.text2')"></span>
      </div>
      <div class="logo">
        <img style="width:10em" src="./logo1.png">
      </div>
      <div style="text-align:center">
        Pere, Isidre i Jaume
      </div>
      <div class="objectes-container">
        <div class="objectsTitle">{{$t('donacions.objectes')}}</div>
        <div class="donacions row">
            <DonacionsCard v-for="(item, i) in donacions" :key="i" :info="item"/>
        </div>
      </div>
      <div class="texts-container">
        <div class="objectsTitle">{{$t('donacions.texts')}}</div>
        <div class="texts">
            <TextCard v-for="(item, i) in texts" :key="i" :text="item"/>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DonacionsCard from './components/DonacionsCard.vue'
import TextCard from './components/TextCard.vue'
import Spinner from '../../shared/components/Spinner.vue'
import Donacio from '../../shared/models/Donacio'
import Text from '../../shared/models/text'
import api from '../../shared/api'
import { Double } from 'typeorm'

@Component({
  components: {
    Spinner,
    DonacionsCard,
    TextCard
  }
})
export default class Donacions extends Vue {
  donacions: Donacio[] = [];
  texts: Text[] = []
  isPaymenyLayoutShown: boolean = false
  payments: InnerHTML
  donacio: Double = 0

  async created() {
    this.donacions = await api.Donacions.getAllDonacions()
    this.texts = await api.Texts.getAllTexts()
    console.log(this.texts)
  }
  

  showPaymentLayout () {
    this.isPaymenyLayoutShown = !this.isPaymenyLayoutShown
    return this.isPaymenyLayoutShown
  }
}
</script>

<style scoped>
.donacions {
  margin-top: 1em;
  font-family: sans-serif;
}

.infoContainer {
  text-align: justify;
  margin-bottom: 2em;
}

.pageTitle { 
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 1em;
  text-align:center;
}

.logo {
  width: 10em;
  margin-left: auto;
  margin-right: auto;
}

.email {
  text-align: center;
  margin-bottom: 1em;
}

.pageDescription {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  line-height: 40px;
}

.number{
  font-size: 24px;
    font-weight: bold;
}

.instruccio {
  text-align:left;
  margin-bottom: 1em;
  line-height: 33px;
}

.paymentLayout {
  text-align: center;
  margin-bottom: 3em;
}

.banc-account {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-bottom: 1em;
}

.objectsTitle {
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 1em;
  text-align:center;
}

.objectes-container {
  margin-top: 5em;
}

.img-container {
  justify-content: center;
  margin: 1em;
}

img {
  margin-bottom: 2em;
  width: 100%;
  border-radius: 3px;
}

.container {
  position: relative;
  margin: 0;
  margin-left: 0.5em;
  padding: 0;
  padding-bottom: 2em;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  border-radius: 3px;
  text-align: center;
  margin-top: 0.5em;
}

.img-title {
  margin: 1em;
}

.participa {
  margin-top: 3em;
  padding: 1em;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  max-width: 35em;
}

.participaTitle {
  margin-bottom: 1em;
}

.hide {
  display: none;
}

.formTitle{
  margin-right: 1em;
}

input {
  padding: 0.5em;
  border: 1px solid grey;
  border-radius: 3px;
}

.texts-container {
  margin: 5em 0;
}


@media (max-width: 740px) { /*MOBILE*/
  .container {
    flex-basis: 100%;
    max-width: 100%;
    box-shadow: none;
    margin: 0;
  }

  .paymentLayout {
    margin-bottom: 1em;
  }

  .footerinfo {
    margin-bottom: 2em;
  }

  .colonies {
    margin-top: 1em;
    padding-left: 0;
    padding-right: 0;
  }

  .img-container {
    margin: 0;
  }

  img {
    margin-left: 0;
  }

  .mssn-text {
    margin-top: 0;
    margin: 2em 10%;
  }

  .texts-container {
    margin: 3em 0;
  }

}

</style>

<template>
    <div>
      <div class="infoContainer">
        <div class="pageTitle">#JuntsPerAndorra</div>
        <div class="pageDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet pharetra orci. Proin viverra dapibus velit, vel scelerisque sapien gravida lobortis. Sed congue tortor a ante dignissim lacinia. Etiam vulputate, sem non finibus consectetur, augue odio mollis turpis, ut porttitor velit lacus sit amet turpis. Maecenas nulla elit, ultricies malesuada orci sed, bibendum fringilla nulla. Etiam lorem sem, mollis vel lacus sit amet, pharetra finibus nibh. Sed non enim eros. Nunc eget mauris nisl. Mauris posuere commodo augue, vel pulvinar diam porta et. Nunc rutrum lobortis ipsum ut laoreet. Quisque tristique tristique lorem sed pharetra. In nec nibh eleifend, accumsan magna vel, consectetur dolor. Phasellus id enim ultricies orci blandit imperdiet.
        </div>
      </div>
      <div class="paymentLayout">
          <a class="btn btn-select" @click="showPaymentLayout">Participa</a>
          
          <div class="participa" :class="{ 'hide': !isPaymenyLayoutShown}">
            <div>
              <div class="participaTitle">Fes un ingrés solidari al següent número de compte:</div>
              <span class="formTitle">Aportació</span>
              <currency-input v-model="donacio"/>
            </div>
            <div id="paypal-button-container" class="paypal-container" >
              
            </div>
          </div>
      </div>
      <div>
        <div class="objectsTitle">Objectes del sorteig</div>
        <div class="donacions row">
            <DonacionsCard v-for="(item, i) in donacions" :key="i" :info="item"/>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DonacionsCard from './components/DonacionsCard.vue'
import Spinner from '../../shared/components/Spinner.vue'
import Donacio from '../../shared/models/donacio'
import api from '../../shared/api'
import { Double } from 'typeorm'

@Component({
  components: {
    Spinner,
    DonacionsCard
  }
})
export default class Donacions extends Vue {
  donacions: Donacio[] = [];
  isPaymenyLayoutShown: boolean = false
  payments: InnerHTML
  donacio: Double = 0

  async created() {
    this.donacions = await api.Donacions.getAllDonacions()
  }
  
  mounted () {
    //this.renderPaypal()
  }

  /*renderPaypal() {
    paypal.Buttons({
      createOrder: function(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '0.01'
            }
          }]
        });
      },
      onApprove: function(data, actions) {
        // This function captures the funds from the transaction.
        return actions.order.capture().then(function(details) {
          // This function shows a transaction success message to your buyer.
          alert('Transaction completed by ' + details.payer.name.given_name);
        });
      }
    }).render('#paypal-button-container')
  }*/

  showPaymentLayout () {
    this.isPaymenyLayoutShown = !this.isPaymenyLayoutShown
    return this.isPaymenyLayoutShown
  }
}
</script>

<style scoped>
.donacions {
  margin-top: 1em;
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

.pageDescription {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.paymentLayout {
  text-align: center;
  margin-bottom: 3em;
}

.objectsTitle {
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 1em;
  text-align:center;
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


@media (max-width: 740px) { /*MOBILE*/
  .container {
    flex-basis: 100%;
    max-width: 100%;
    box-shadow: none;
    margin: 0;
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

}

</style>

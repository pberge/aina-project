<template>
    <div class="contact row">
      <Spinner id="spinner"/>
      <div class="col-xs-6 row container">
          <div class="item phone col-xs-6">
              <div class="row" style="justify-content: center;">
                  <i class="material-icons icon">phone</i>
              </div>
              <span class="phone text">+376 851434</span>
          </div>
          <div class="item col-xs-6" v-on:click="goto('mail')">
              <div class="row" style="justify-content: center;">
                  <i class="material-icons icon">mail</i>
              </div>
              <span class="text">colonies.aina@andorra.ad</span>
          </div>
          <div class="item col-xs-6"  v-on:click="goto('insta')">
              <div class="row" style="justify-content: center;">
                  <img class="icon" src="@/frontend/assets/insta.svg"/>
              </div>
              <span class="text">@colonies.aina</span>
          </div>
          <div class="item col-xs-6" v-on:click="goto('fb')">
              <div class="row" style="justify-content: center;">
                  <img class="icon" src="@/frontend/assets/fb.svg"/>
              </div>
              <span class="text">AINA - Casa de Colònies Canillo</span>
          </div>
      </div>
      <iframe class="col-xs-6 map" @load="loaded" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9062.935713124245!2d1.6015468587987787!3d42.57029764015821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd4d97a0ef9a7fee3!2sCasa%20de%20Col%C3%B2nies%20Aina!5e0!3m2!1ses!2ses!4v1567583533476!5m2!1ses!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Spinner from '../../shared/components/Spinner.vue'

@Component({
  components: {
    Spinner
  }
})
export default class Contact extends Vue {
  loaded () {
    document.getElementById('spinner').classList.add("invisible")
  }

  goto (value: string) {
    if (value === 'insta') {
      window.open('https://www.instagram.com/colonies.aina/?hl=es', '_blank')
    }
    else if (value === 'fb') {
      window.open('https://www.facebook.com/AINA-Casa-de-Col%C3%B2nies-Canillo-626944457391785/', '_blank')
    }
    else if (value === 'mail') {
      window.location.href = 'mailto:colonies.aina@andorra.ad?subject=Subject&body=message%20goes%20here'
    }
  }
}
</script>

<style scoped>
.image {
  width: 100%;
  position: relative;
  margin: 0;
}
.container {
  justify-content: center;
  align-items: center;
  width: 50%;
}
.item {
  text-align: center;
  height: 12em;
  padding-top: 4em;
  cursor: pointer;
  border-radius: 3px;
}

.item:hover {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.icon {
  margin-bottom: 0.5em;
  color: black;
  width: 30px;
  height: 30px;
  display: block;
  font-size: 2em !important;
  opacity: 0.4;
}

a {
  color:black;
  text-decoration: none;
}

.phone {
  font-family: monospace;
  cursor: auto;
}

.text {
  font-size: 0.9em;
}

.map {
  border-radius: 3px;
  padding: 0;
  margin-left: 1em;
}

.invisible {
  visibility: hidden;
}

@media (max-width: 947px) {
  .container {
    flex-basis: 100%;
    max-width: 100%;
  }

  .map {
    flex-basis: 100%;
    max-width: 100%;
    margin-top: 1em;
    margin-left: 0;
  }
}

@media (max-width: 676px) { /*MOBILE*/
  .item {
    flex-basis: 100%;
    max-width: 100%;
  }
}

</style>

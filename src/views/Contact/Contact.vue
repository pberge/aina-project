<template>
  <div class="contact">
      <img class="image" src="@/assets/contact.jpg"/>
      <div class="row container">
        <div class="item col-xs-3">
            <i class="material-icons icon">phone</i>
            <span>+376 851434</span>
        </div>
        <div class="item col-xs-3">
            <i class="material-icons icon">location_on</i>
            <a href="https://goo.gl/maps/J2PkqF5rL1pME18H7" target="blank">Mapa</a>
        </div>
        <div class="item col-xs-3">
            <i class="material-icons icon">mail</i>
            <span>colonies.aina@andorra.ad</span>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Contact extends Vue {

}
</script>

<style scoped>
.image {
    width: 100%;
    position: relative;
    margin: 0;
}
.container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
}
.item {
    background-color: #ffffff6e;
    text-align: center;
    margin: 0 1em;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.icon {
    font-size: 2em !important;
    margin-bottom: 0.5em;
}

/* .map {
    width: 100%;
    height: 10em;
} */

a {
    color:black;
    text-decoration: none;
}

</style>

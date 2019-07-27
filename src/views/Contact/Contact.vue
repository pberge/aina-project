<template>
  <div class="contact">
      <img class="image" src="@/assets/contact.jpg"/>
      <div class="row container">
        <div class="item col-xs-3">
            <i class="material-icons icon">phone</i>
            <span class="phone">+376 851434</span>
        </div>
        <div class="item map col-xs-3" onclick="window.open('https://goo.gl/maps/J2PkqF5rL1pME18H7','new_window');">
            <i class="material-icons icon">location_on</i>
            <span>Localització</span>
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
    font-weight: bold;
}

.map:hover {
    border: 1px solid orange;
    transition: 0.3s;
    cursor: pointer;
}

.icon {
    font-size: 2em !important;
    margin-bottom: 0.5em;
    color: black;
}

a {
    color:black;
    text-decoration: none;
}

.phone {
    font-family: monospace;
}

</style>

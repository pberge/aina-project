<template>
  <div class="topbar row">
    <div class="col-xs-3 col-md-5 start-xs">
        <router-link class="row logo-container" to="/">
            <img class="logo" src="@/assets/logo.png"/>
            <span class="title">AINA</span>
        </router-link>
    </div>
    <div class="menu row col-xs-9 col-md-7 end-xs">
        <router-link class="link col-xs" v-for="(link,i) in menuLinks" :key="i" :to="link.to">
           {{link.tag}}
        </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import menuLink from '../objects/menuLink'

@Component
export default class TopBar extends Vue {
    menuLinks: menuLink[] = []

    mounted () {
    	this.menuLinks = [  
        { 'to': '/', 'tag': 'Home' },
        { 'to': '/prices', 'tag': 'Història' },
        { 'to': '/', 'tag': 'Instalacions' },
        { 'to': '/', 'tag': 'Notícies' },
        { 'to': '/', 'tag': 'Calendari' },
        { 'to': '/prices', 'tag': 'Preus' },
        { 'to': '/', 'tag': 'Contacte' }
      ]
    }
}
</script>

<style scoped>
.topbar {
    width: 100%;
    height: 4em;
	margin: 0;
    background-color: white;
    position: absolute;
    left: 0;
    top: 0;
    align-items: center;
    justify-content: center;
}

.logo-container {
    align-items: center;
    width: fit-content;
    text-decoration: none;
}

.logo {
    height: 3em;
    margin-left: 2em;
}

.title {
    text-decoration: none;
    color: #000000;
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 4px;
    margin-left: 1em;
}

.link {
    max-height: 4em;
    color: #000000;
    padding-right: 1em;
    text-decoration: none;
    text-align: center;
}

.link:hover {
    color: #F4B41A;
}
</style>

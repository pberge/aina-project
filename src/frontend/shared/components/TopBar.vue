<template>
  <div>
    <div class="topbar row" id="topbar">
      <div class="col-xs-3 col-md-5 start-xs">
        <div class="row container">
          <i class="material-icons mobile-menu-btn" @click="showMenu(true)">menu</i>
          <router-link class="row logo-container" to="/">
            <img class="logo" src="@/frontend/assets/logoaina.png" />
            <span class="title">AINA</span>
          </router-link>
        </div>
      </div>
      <div class="menu row col-xs-9 col-md-7 end-xs">
        <router-link
          class="link col-xs"
          :class="{'actual-page': isActualPage(link.to)}"
          v-for="(link,i) in menuLinks"
          :key="i"
          :to="link.to"
        >{{$t("topbar." + link.tag)}}</router-link>
        <LanguageSelector />
      </div>
    </div>
    <div
      class="mobile-menu row"
      id="mobile-menu"
      :class="{'mobile-menu-active': isSideBar}">
      <img class="logo mobile-logo" src="@/frontend/assets/logoaina.png" />
      <router-link
        class="menu-link"
        :class="{'actual-page': isActualPage(link.to), 'hide':!isSideBar}"
        v-for="(link,i) in menuLinks"
        :key="i"
        :to="link.to"
        v-on:click.native="showMenu(false)"
      >{{$t("topbar." + link.tag)}}</router-link>
      <MobileLanguageSelector />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import menuLink from '../models/menuLink'
import AppModule from '../../AppModule'
import { getModule } from 'vuex-module-decorators'
import store from '../../store'
const appModule = getModule(AppModule, store)
import Hammer from 'hammerjs'
import LanguageSelector from './LanguageSelector.vue'
import MobileLanguageSelector from './MobileLanguageSelector.vue'

@Component({
  components: {
    LanguageSelector,
    MobileLanguageSelector
  }
})
export default class TopBar extends Vue {
  menuLinks: menuLink[] = []
  isSideMenuActive: boolean = false

  mounted () {
    this.initGestures()
    this.menuLinks = [
      { to: '/colonies', tag: 'colonies' },
      { to: '/donacions', tag: 'donacions' },
      { to: '/history', tag: 'history' },
      { to: '/facilities', tag: 'facilities' },
      { to: '/news', tag: 'news' },
      { to: '/prices', tag: 'prices' },
      { to: '/contact', tag: 'contact' }
    ]
    window.onscroll = () => {this.scrollFunction()}
  }

  scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topbar").style.boxShadow = "0 5px 8px -6px grey";
    document.getElementById("topbar").style.opacity = "0.9";
  } else {
    document.getElementById("topbar").style.boxShadow = "none";
    document.getElementById("topbar").style.opacity = "1";
  }
}

  initGestures () {
    var myElement = document.getElementById('mobile-menu')
    var mc = new Hammer(myElement)
    mc.on("panleft panright tap press", function(ev) { // listen to events...
      if(ev.type === 'panright') appModule.SideBar(true)
      else if(ev.type === 'panleft') appModule.SideBar(false)
    })
  }

  get isSideBar () {
    return appModule.sideBarActive
  }

  showMenu (value: boolean) {
    appModule.SideBar(value)
  }

  isActualPage (page: string) {
    return this.$route.path === page
  }

  beforeDestroy () {
    window.onscroll = () => {}
  }
}
</script>

<style scoped>
.topbar {
  width: 100%;
  height: 5em;
  margin: 0;
  background-color: white;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 5;
  opacity: 0.9;
  
}

.container {
  align-items: center;
  padding-left: 1.5em;
}

.logo-container {
  align-items: center;
  width: fit-content;
  text-decoration: none;
  margin-left: 2em;
}

.logo {
  height: 3em;
}

.title {
  text-decoration: none;
  color: #000000;
  font-size: 2.6em;
  font-weight: bold;
  letter-spacing: 5px;
  margin-left: 1em;
}

.link {
  max-height: 4em;
  color: #000000;
  padding-right: 1em;
  text-decoration: none;
  text-align: center;
}

.menu-link {
  color: black;
  padding: 1em;
  text-decoration: none;
  text-align: center;
  display: block;
  cursor: pointer;
}

.link:hover {
  color: var(--main-color);
}

.mobile-menu-btn {
  display: none;
  cursor: pointer;
  font-size: 1.2em !important;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  position: fixed;
  text-align: center;
  padding: 1em;
  z-index: 10;
  left: -70%;
  top: 0;
  width: 75%;
  bottom: 0;
  transition: 0.3s;
}

.mobile-menu-active {
  left: 0;
  transition: 0.3s;
  z-index: 10;
  background-color: white;
}

.mobile-logo {
  margin-bottom: 1em;
}

.actual-page {
  color: var(--main-color);
}

.hide {
  display: none;
}

@media (max-width: 1022px) {
  .title {
    display: none;
  }

  .topbar {
    justify-content: center;
  }
}

@media (max-width: 740px) { /*MOBILE*/
  .title {
    display: initial;
  }

  .menu {
    display: none;
  }

  .col-xs-4, .col-xs-3 {
    flex-basis: 100%;
    max-width: 100%;
  }

  .topbar {
    justify-content: center;
  }

  .mobile-menu {
    display: initial;
  }

  .mobile-menu-btn {
    display: initial;
  }
}

</style>

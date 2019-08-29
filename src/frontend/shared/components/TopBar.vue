<template>
  <div class="topbar row">
    <div class="col-xs-3 col-md-5 start-xs">
      <div class="row container">
        <i class="material-icons mobile-menu-btn" @click="showMenu(true)">menu</i>
        <router-link class="row logo-container" to="/">
          <img class="logo" src="@/frontend/assets/logoaina.png" />
          <span class="title">AINA</span>
        </router-link>
      </div>
    </div>
    <div
      class="mobile-menu row"
      :class="{'mobile-menu-active': isSideBar}">
      <img class="logo mobile-logo" src="@/frontend/assets/logoaina.png" />
      <router-link
        class="menu-link"
        :class="{'actual-page': isActualPage(link.to)}"
        v-for="(link,i) in menuLinks"
        :key="i"
        :to="link.to"
        v-on:click.native="showMenu(false)"
      >{{link.tag}}</router-link>
    </div>
    <div class="menu row col-xs-9 col-md-7 end-xs">
      <router-link
        class="link col-xs"
        v-for="(link,i) in menuLinks"
        :key="i"
        :to="link.to"
      >{{link.tag}}</router-link>
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

@Component
export default class TopBar extends Vue {
  menuLinks: menuLink[] = []
  isSideMenuActive: boolean = false

  mounted () {
    this.menuLinks = [
      { to: '/', tag: 'Portada' },
      { to: '/', tag: 'Història' },
      { to: '/facilities', tag: 'Instalacions' },
      { to: '/news', tag: 'Notícies' },
      { to: '/prices', tag: 'Preus' },
      { to: '/contact', tag: 'Contacte' }
    ]
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
}
</script>

<style scoped>
.topbar {
  width: 100%;
  height: 5em;
  margin: 0;
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
}

.container {
  align-items: center;
  padding-left: 2.5em;
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
  color: #f4b41a;
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
  z-index: -10;
  left: -275px;
  top: 0;
  width: 75%;
  bottom: 0;
  background-color: white;
  transition: 0.3s;
}

.mobile-menu-active {
  left: 0;
  transition: 0.3s;
  z-index: 10;
}

.mobile-logo {
  margin-bottom: 1em;
}

.actual-page {
  color: #f4b41a;
  font-weight: bold;
}

@media (max-width: 947px) {
  .title {
    display: none;
  }

  .topbar {
    justify-content: center;
  }
}

@media (max-width: 676px) { /*MOBILE*/
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
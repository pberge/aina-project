<template>
  <html>
    <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
      <div id="app" >
        <div v-if="isLogged" class="row"> 
          <BackofficeSideBar />
          <BackofficeTopBar />
          <router-view class="backoffice-view"/>
        </div>
        <div v-if="!isLogged"> 
          <TopBar />
          <router-view class="view"/>
        </div>
        <div class="color-view" v-if="isSideBar" v-on:click="showMenu(false)">
        </div>
      </div>
    </body>
  </html>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BackofficeSideBar from '@/backoffice/shared/components/SideBar.vue' // @ is an alias to /src
import BackofficeTopBar from '@/backoffice/shared/components/TopBar.vue' // @ is an alias to /src
import TopBar from '@/shared/components/TopBar.vue'
import { getModule } from 'vuex-module-decorators'
import AppModule from './AppModule'

const store = require('./store')
const appModule = getModule(AppModule, store)

@Component({
  components: {
    BackofficeSideBar,
    BackofficeTopBar,
    TopBar
  }
})
export default class App extends Vue {

  get isLogged () {
    return appModule.logged
  }

  get isSideBar () {
    return appModule.sideBarActive
  }

  showMenu(value: boolean) {
    appModule.SideBar(value)
  }

}

</script>

<style>
@import "~flexboxgrid";
@import "./shared/styles/index.styl";
@import url('https://fonts.googleapis.com/css?family=Actor');

html, body {
  font-family: 'Actor'; font-size: 16px;
}

#app {
  font-family: 'Actor'; font-size: 16px;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  margin: 0;
}

.view {
  position: absolute;
  top: 5em;
  left: 0;
  right: 0;
  margin: 0;
  padding: 1em 2em;
}

.backoffice-view {
  margin-left: 14em;
  margin-top: 4em;
  padding: 2em 1em;
  width: 100%;
}

.sidebar {
  margin-left: 60%;
}

.color-view {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  opacity: 0.6;
  transition: 0.3s;
  z-index: 5;
}

</style>

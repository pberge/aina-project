<template>
  <html>
    <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
      <div id="app" >
        <div v-if="isLogginPage">
          <router-view class="view"/>
        </div>
        <div v-if="isAdmin"> 
          <BackofficeSideBar />
          <BackofficeTopBar />
          <router-view class="backoffice-view"/>
        </div>
        <div v-if="!isAdmin && !isLogginPage"> 
          <TopBar />
          <router-view class="view"/>
        </div>
        <div class="color-view" v-if="!isAdmin && isSideBar" v-on:click="showMenu(false)">
        </div>
      </div>
    </body>
  </html>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BackofficeSideBar from '@/frontend/backoffice/shared/components/SideBar.vue' // @ is an alias to /src
import BackofficeTopBar from '@/frontend/backoffice/shared/components/TopBar.vue' // @ is an alias to /src
import TopBar from '@/frontend/shared/components/TopBar.vue'
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

  get isAdmin () {
    let url = this.$route.meta.requiresAuth
    return url != null
  }

  get isLogginPage () {
    return this.$route.name === 'adminLogin'
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

.row {
  margin: 0;
}

.view {
  position: absolute;
  top: 5em;
  left: 0;
  right: 0;
  margin: 0;
  padding: 1em 2em;
  bottom: 0;
}

.backoffice-view {
  position: absolute;
  top: 5em;
  left: 14em;
  right: 0;
  margin: 0;
  padding: 1em 2em;
}

.sidebar {
  margin-left: 60%;
}

.color-view {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 600vh;
  background-color: black;
  opacity: 0.6;
  transition: 0.3s;
  z-index: 5;
}

</style>

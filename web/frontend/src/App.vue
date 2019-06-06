<template>
  <html>
    <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
      <div id="app">
        <div v-if="false" class="row"> <!-- if logged -->
          <SideBar class="col-xs-2"/>
          <div class="col-xs-10"></div>
          <router-view class="col-xs-10"/>
        </div>
        <div v-if="true"> <!-- if not logged -->
          <TopBar/>
          <router-view class="view"/>
        </div>
      </div>
    </body>
  </html>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SideBar from '@/shared/components/SideBar.vue' // @ is an alias to /src
import TopBar from '@/shared/components/TopBar.vue' // @ is an alias to /src

@Component({
  components: {
    SideBar,
    TopBar
  }
})
export default class App extends Vue {}

</script>

<style>
@import "~flexboxgrid";
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
  padding: 1em 2em;
}

</style>

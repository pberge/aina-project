<template>
  <div id="app" class="row">
    <SideBar/>
    <TopBar />  
    <router-view class="view"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SideBar from '@/shared/components/SideBar.vue'
import TopBar from '@/shared/components/TopBar.vue'

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
  margin: 0;
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
  margin-left: 14em;
  margin-top: 4em;
  padding: 1em 2em;
}

</style>

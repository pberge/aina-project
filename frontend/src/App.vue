<template>
  <div id="app">
    <div v-if="true" class="row"> <!-- if logged -->
      <SideBar class="col-xs-2"/>
      <div class="col-xs-10"></div>
      <router-view class="col-xs-10"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SideBar from '@/shared/components/SideBar.vue' // @ is an alias to /src

@Component({
  components: {
    SideBar
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>

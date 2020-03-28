<template>
  <div id="sidebar" class="sidebar">
    <div class="link-container">
      <router-link class="item" to="/admin/news" :class="{'item-active': isActive('/admin/news')}">
        <i class="material-icons">list</i> Notícies
      </router-link>
      <router-link class="item" to="/admin/prices" :class="{'item-active': isActive('/admin/prices')}">
        <i class="material-icons">euro</i>Preus
      </router-link >
      <router-link class="item" to="/admin/donacions" :class="{'item-active': isActive('/admin/donacions')}">
        <i class="material-icons">local_hospital</i>JuntsPerAndorra
      </router-link >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SideBar extends Vue {
  isActive (item: string) {
    return this.$route.path === item
  }
}
</script>

<style scoped>
.sidebar {
  width: 14em;
  height: 100%;
  background-color: #3a3a3a26;
  position: fixed;
  left: 0;
  top: 4em;
  margin: 0;
}

.link-container {
  padding: 1em 0;
}

.item {
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 1em 2em;
  
}

.item:hover {
  background-color: #8080804a;
}

.item-active {
  background-color: #8080804a;
}

i {
  margin-right: 1em;
}

</style>

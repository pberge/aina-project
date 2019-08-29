<template>
  <div class="sidebar">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SideBar extends Vue {
}
</script>

<style scoped>
.sidebar {
  width: 14em;
  height: 100%;
  background-color: #3a3a3afa;
  position: fixed;
  left: 0;
  top: 0;
  margin: 0;
}
</style>

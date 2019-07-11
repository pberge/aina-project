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
    width: 100%;
    height: 100%;
    background-color: grey;
    position: absolute;
    left: 0;
    top: 0;
}
</style>

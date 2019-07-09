<template>
  <div class="topbar row">
    <div class="user">
        admin@gmail.com
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TopBar extends Vue {}
</script>

<style scoped>
.topbar {
    z-index: 1;
    position:fixed;
    height: 4em;
	  margin: 0;
    left: 14em;
    right: 0;
    background-color: white;
    border-bottom: 1px solid #3a3a3afa;
    align-items: center;
    justify-content: flex-end;
    padding: 1em;
}

.user {
    font-size: 0.8em;
}

</style>

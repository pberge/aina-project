<template>
    <div class="spinner"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Spinner extends Vue { }
</script>

<style scoped>
.spinner {
  width: 7em;
  height: 7em;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -3.5em;
  margin-left: -3.5em;
  border-radius: 50%;
  border: 3px solid #eaf5fe;
  border-right-color: var(--main-color);
  animation: rotateSpinner 900ms linear infinite;
  z-index: 10;
}

@keyframes rotateSpinner {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 740px) { /*MOBILE*/
  .spinner {
    width: 4em;
    height: 4em;
    margin-top: -2em;
    margin-left: -2em;
  }
}
</style>

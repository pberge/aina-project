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
  margin-top: -(7em/ 2);
  margin-left: -(7em/ 2);
  border-radius: 50%;
  border: 3px solid #eaf5fe;
  border-right-color: #4caf50;
  animation: rotateSpinner 900ms linear infinite;
  z-index: 10;
}

@keyframes rotateSpinner {
  to {
    transform: rotate(360deg);
  }
}
</style>

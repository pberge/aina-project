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
  width: 3em;
  height: 3em;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -(3em/ 2);
  margin-left: -(3em/ 2);
  border-radius: 50%;
  border: 5px solid #eaf5fe;
  border-right-color: #4caf50;
  animation: rotateSpinner 800ms linear infinite;
}

@keyframes rotateSpinner {
  to {
    transform: rotate(360deg);
  }
}
</style>

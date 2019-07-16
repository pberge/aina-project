<template>
  <div class="image-container">
    <img class="image" v-bind:src="img"/>
    <span class="text">{{$t("facilities."+description)}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ImageItem extends Vue {
  @Prop() img: string
  @Prop() description: string
}
</script>

<style scoped>
.image-container {
  width: 18em;
  position: relative;
  margin: 0.5em;
}

.image {
  width: 100%;
  border-radius: 3px;
}

.text {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.6em;
  background-color: white;
  opacity: 0.6;
}

</style>

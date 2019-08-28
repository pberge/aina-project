<template>
  <div class="gallery">
    <span class="title">{{title}}</span>
    <div class="row images-container">
      <ImageItem
        v-for="(item, i) in images"
        :key="i"
        :img="item.img"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ImageItem from './ImageItem.vue'

@Component({
  components: {
    ImageItem
  }
})
export default class Gallery extends Vue {
  @Prop() images: any[]
  @Prop() title: string
}
</script>

<style scoped>
.gallery {
  margin-bottom: 1em;
}

.title {
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
}

.images-container {
  margin-top: 1em;
  margin-bottom: 2em;
}
</style>

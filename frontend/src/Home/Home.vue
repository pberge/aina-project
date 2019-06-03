<template>
  <div class="home">
      <img class="photo" src="@/assets/home.jpg"/>
      <div class="title-container row">
				<span class="title">Casa de colònies de Canillo</span>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
}
</script>

<style scoped>
.home {
	
}

.photo {
  max-width: 100%;  
}

.title-container {
	max-width: 100%;
	min-height: 10em;
	justify-content: center;
	align-items: center;
}

.title {
	padding: 1em;
}
</style>
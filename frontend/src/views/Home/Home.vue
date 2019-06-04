<template>
  <div>
      <img class="photo" src="@/assets/home.jpg"/>
      <div class="title-container row">
				<span class="title">{{$t("home.title")}}</span>
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
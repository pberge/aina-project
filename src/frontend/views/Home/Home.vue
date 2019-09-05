<template>
  <div class="home">
    <Spinner id="spinner"/>
    <img class="photo" src="@/frontend/assets/home.jpg" @load="onload"/>
    <div class="title-container row">
      <span class="title">{{$t("home.title")}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Spinner from '../../shared/components/Spinner.vue'

@Component({
  components: {
    Spinner
  }
})
export default class Home extends Vue {
  onload () {
    document.getElementById('spinner').classList.add("invisible")
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}

.photo {
  max-width: 95%;
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

.invisible {
  visibility: hidden;
}
</style>

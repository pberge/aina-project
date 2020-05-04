<template>
  <div class="home">
    <Spinner id="spinner"/>
    <h2 style="margin-bottom:2em">Avís important</h2>
    <img class="photo" style="margin-bottom:3em" src="http://res.cloudinary.com/ainacloud/image/upload/v1588528827/a7ng0dmbzjkhamqj6fux.jpg" @load="onload"/>
    <img class="photo" src="https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_1500/v1568109281/Home/P6200071_2_yoc5gd.jpg" @load="onload"/>
    <div class="text-container">
      <span v-html="$t('home.text')"></span>
    </div>
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

.text-container {
  margin-top: 1em;
  
}

.title-container {
  max-width: 100%;
  min-height: 10em;
  justify-content: center;
  align-items: center;
}

.title {
  padding: 1em;
  font-size: 20px;
}

.invisible {
  visibility: hidden;
}

@media (max-width: 676px) { /*MOBILE*/
  .home {
    padding-left: 0;
    padding-right: 0;
  }

  .photo {
    max-width: 100%;
  }
}
</style>

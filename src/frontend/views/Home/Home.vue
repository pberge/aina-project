<template>
  <div class="home">
    <Spinner id="spinner"/>
    <img class="photo" src="https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_1500/v1568109281/Home/P6200071_2_yoc5gd.jpg" @load="onload"/>
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

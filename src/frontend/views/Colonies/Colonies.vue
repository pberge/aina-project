<template>
    <div class="colonies">
        <div class="img-container row">
          <div class="container col-md-5 col-xs-5">
            <span class="img-title">
              {{$t("colonies.summer")}}
            </span>
            <img class="" src="https://res.cloudinary.com/ainacloud/image/upload/v1568370752/Colonies/frameEstiu2_3_uyz3fw.png">
          </div>
          <div class="container col-md-5 col-xs-5">
            <span class="img-title">
              {{$t("colonies.winter")}}
            </span>
            <img class="" src="https://res.cloudinary.com/ainacloud/image/upload/v1568370927/Colonies/hivern2_yjifxp.jpg">
          </div>
        </div>
        <div class="mssn-text">
          {{$t("colonies.coloniesText")}}
        </div>
        <div class="ideari-container">
          <span class="ideari-title">Ideari</span>
          <Valors />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Valors from './components/Valors.vue'
import Spinner from '../../shared/components/Spinner.vue'

@Component({
  components: {
    Spinner,
    Valors
  }
})
export default class Colonies extends Vue {
  
}
</script>

<style scoped>
.colonies {
  margin-top: 1em;
}

.img-container {
  justify-content: center;
  margin: 1em;
}

img {
  margin-left: 0.5em;
  margin-top: 1em;
  width: 100%;
}

.container {
  position: relative;
  margin: 0;
  text-align: center;
  margin-top: 0.5em;
}

.img-title {
  font-weight: bold;
  margin: 1em;
}

.mssn-text {
  margin: 2em 10%;
  text-align: justify;
}

.ideari-container {
  margin-top: 3em;
  text-align: center;
}

.ideari-title {
  font-weight: bold;
}

@media (max-width: 740px) { /*MOBILE*/
  .container {
    flex-basis: 100%;
    max-width: 100%;
    padding: 0;
  }

  .colonies {
    margin-top: 1em;
    padding-left: 0;
    padding-right: 0;
  }

  .img-container {
    margin: 0;
  }

  img {
    margin-left: 0;
  }

}

</style>

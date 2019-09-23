<template>
    <div class="colonies">
        <div class="img-container row">
          <div class="container col-md-5 col-xs-5">
            <img class="" src="https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_1000/v1568873654/Colonies/frame_guitarra_2_g7trxs.png">
            <span class="img-title">
              {{$t("colonies.summer")}}
            </span>
          </div>
          <div class="container col-md-5 col-xs-5">
            <img class="" src="https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_1000/v1568370927/Colonies/hivern2_yjifxp.jpg">
            <span class="img-title">
              {{$t("colonies.winter")}}
            </span>
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
  margin-bottom: 2em;
  width: 100%;
  border-radius: 3px;
}

.container {
  position: relative;
  margin: 0;
  margin-left: 0.5em;
  padding: 0;
  padding-bottom: 2em;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  border-radius: 3px;
  text-align: center;
  margin-top: 0.5em;
}

.img-title {
  /* font-weight: bold; */
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
    box-shadow: none;
    margin: 0;
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

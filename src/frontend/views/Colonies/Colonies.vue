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
        <div class="mssn-text" v-html="$t('colonies.coloniesText1')">
        </div>
        <div class="ideari-container">
          <Valors />
        </div>
        <div class="mssn-text" v-html="$t('colonies.coloniesText2')">
        </div>
        <div class="signature">{{$t("colonies.signature")}}</div>
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
  margin: 1em;
}

.mssn-text {
  margin: 2em 20%;
  text-align: justify;
  line-height: 1.7;
}

.ideari-container {
  margin-top: 3em;
  text-align: center;
}

.signature {
  text-align: right;
  margin: 2em 10%;
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

  .mssn-text {
    margin-top: 0;
    margin: 2em 10%;
  }

}

</style>

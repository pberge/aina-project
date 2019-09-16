<template>
    <div class="colonies">
        <div class="img-container row">
          <div class="container col-md-5 col-xs-5">
            <img class="" src="https://res.cloudinary.com/ainacloud/image/upload/v1568370752/Colonies/frameEstiu2_3_uyz3fw.png">
            <span class="img-content">
              {{$t("colonies.summer")}}
            </span>
          </div>
          <div class="container col-md-5 col-xs-5">
            <img class="" src="https://res.cloudinary.com/ainacloud/image/upload/v1568370927/Colonies/hivern2_yjifxp.jpg">
            <span class="img-content">
              {{$t("colonies.winter")}}
            </span>
          </div>
        </div>
        <div class="mssn-text">
          {{$t("colonies.coloniesText")}}
        </div>
        <Valors />
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
  width: 100%;
  /* opacity: 0.8; */
}

.container {
  position: relative;
  margin: 0;
}

.img-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  background-color: white;
  padding: 1em;
  opacity: 0.6;
}

.mssn-text {
  margin: 2em 10%;
  text-align: justify;
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

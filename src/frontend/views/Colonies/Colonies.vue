<template>
    <div class="colonies">
        <div class="img-container row">
          <div class="container col-md-5 col-xs-5">
            <img class="" src="https://res.cloudinary.com/ainacloud/image/upload/v1568370752/Colonies/frameEstiu2_3_uyz3fw.png">
            <span class="img-content">
              Colònies a l'estiu
            </span>
          </div>
          <div class="container col-md-5 col-xs-5">
            <img class="" src="https://res.cloudinary.com/ainacloud/image/upload/v1568370927/Colonies/hivern2_yjifxp.jpg">
            <span class="img-content">
              Alberg a l'hivern
            </span>
          </div>
        </div>
        <div class="mssn-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique et leo et pretium. Etiam mollis elit massa, vel commodo nunc venenatis in. Sed pellentesque lectus id lorem pretium ultricies a eget nunc. In mi est, accumsan nec mauris vel, commodo hendrerit nibh. Sed dignissim sem viverra, varius ex a, finibus tellus. Ut ac scelerisque tellus. Integer molestie, nisi eget viverra malesuada, ipsum nisl gravida libero, sit amet ornare turpis velit at orci. Proin nisl tortor, blandit ut malesuada vitae, vestibulum ac leo. Nunc imperdiet efficitur porttitor. Pellentesque ante magna, vestibulum vitae felis non, tempus accumsan purus. Donec eget bibendum urna. Proin magna mi, sollicitudin eget leo aliquet, porta mattis est. Sed sed facilisis lectus. In luctus dolor sit amet eros suscipit finibus. Curabitur rutrum est vel fringilla pharetra.
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
    margin-bottom: 1em;
    max-width: 100%;
  }
}

</style>

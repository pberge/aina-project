<template>
    <div class="history">
      <div class="container">
        
        <div class="title-container">
          <span class="title">
            {{$t("history.title")}}
          </span>
        </div>
        <div class="text">
          {{$t("history.text")}}
        </div>
      </div>
      <Timeline />
      <div class="img-container">
          <img src="https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_1000/v1568971426/History/historia1_ibqbj7.png"/>
          <img src="https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_1000/v1568971426/History/historia2_q1rvmu.png"/>
          <img src="https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_1000/v1568971424/History/historia3_mczp6n.png"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Spinner from '../../shared/components/Spinner.vue'
import Timeline from './components/Timeline.vue'

@Component({
  components: {
    Spinner,
    Timeline
  }
})
export default class History extends Vue {
  
}
</script>

<style scoped>
.container {
  justify-content: center;
  align-items: center;
  width: 100%;
}

.text {
  text-align: justify;
  line-height: 1.5;
  margin: 0% 20%;
}

.img-container {
  width: 40%;
  margin-left: 30%;
  margin-top: 4em;
}

.title-container {
  text-align: center;
  margin: 1em 0;
  
}

.title {
  font-size: 2em;
}

img {
  width: 100%;
  border-radius: 3px;
}

@media (max-width: 740px) { /*MOBILE*/
  img {
    width: 100%;  
  }

  .history {
    padding: 0;
  }

  .img-container {
    margin: 0;
    width: 100%;
  }

  .text {
    margin: 0% 8%;
    margin-bottom: 2em;
  }

  .title {
    font-size: 1.5em;
  }

}

</style>

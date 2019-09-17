<template>
  <div class="new-detail">
    <Spinner v-if="isLoading" />
    <div v-if="!isLoading">
      <img v-if="newItem.img != null" :src="newItem.img" />
      <div class="title">
        <span>{{newItem.title}}</span>
      </div>
      <div class="text" v-html="newItem.text"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Spinner from '../../backoffice/shared/components/Spinner.vue'
import Api from '../../shared/api'

@Component({
  components: {
    Spinner
  }
})
export default class NewsDetail extends Vue {
  id: string;
  isLoading: boolean = true
  newItem: any = {}

  async created () {
    await Api.News.getNewById(this.$route.params.id).then(res => {
      this.newItem = res
      this.isLoading = false
      if(this.newItem.img != '') {
        let imgSplit = this.newItem.img.split('upload')
        this.newItem.img = imgSplit[0] + 'upload/c_scale,q_auto:eco,w_1000' + imgSplit[1]
      }
    })
  }
}
</script>

<style scoped>
.new-detail {
  text-align: center;
  margin: 2em 25%;
  padding: 0;
  position: relative;
}

img {
  width: 100%;
  border-radius: 3px;
  /* max-height: 500px; */
}

.row {
  justify-content: center;
}

.title {
  color: black;
  font-size: 1.2em;
  padding: 1em;
  text-transform: uppercase;
}

.text {
  padding: 1em;
  text-align: justify;
  color: black;
  text-align: center;
}

@media (max-width: 676px) { /*MOBILE*/
  img {
    width: 100%;
  }

  .new-detail {
    margin: 0;
    box-shadow: none;
  }
}
</style>

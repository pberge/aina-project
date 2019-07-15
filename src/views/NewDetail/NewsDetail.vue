<template>
  <div class="new-detail">
    <Spinner v-if="isLoading" />
    <div v-if="!isLoading">
      <div class="row">
        <img :src="newItem.img" />
      </div>
      <div class="row title">
        <span>{{newItem.title}}</span>
      </div>
      <div class="row">
        <div class="text" v-html="newItem.text"></div>
      </div>
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
    })
  }
}
</script>

<style scoped>
.new-detail {
  color: blue;
}

img {
  width: 50%;
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
  width: 50%;
  border: none;
  text-align: justify;
  color: black;
}
</style>

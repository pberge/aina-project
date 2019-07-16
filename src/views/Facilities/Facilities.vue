<template>
  <div class="new-detail">
    <Gallery title="La Casa" :images="houseImages"/>
    <Gallery title="Les Bordes" :images="bordesImages"/>
    <Gallery title="Exteriors" :images="outsideImages"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Spinner from '../../backoffice/shared/components/Spinner.vue'
import Gallery from './components/Gallery.vue'

@Component({
  components: {
    Spinner,
    Gallery
  }
})
export default class Instalations extends Vue {
  houseImages: any[] = []
  outsideImages: any[] = []
  bordesImages: any[] = []

  mounted () {
    this.houseImages = [
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563209571/Facilities/GOPR7512_fqfulp.jpg', description: 'agora' },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563209025/Facilities/GOPR7518_huleol.jpg', description: 'bedrooms' },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563209326/Facilities/GOPR7520_n2jw5h.jpg', description: 'bathrooms' },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563209310/Facilities/GOPR7526_ylh1ck.jpg', description: 'monitorroom' },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563209290/Facilities/GOPR7523_v7qwaq.jpg', description: 'pingpongroom' },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563268675/Facilities/GOPR7515_d0hnf7.jpg', description: 'woodroom' }
    ]
    this.outsideImages = [
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563268479/Facilities/P6200063_qdujpm.jpg', description: 'field' },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563268614/Facilities/P6200038_qbkca2.jpg', description: 'baracoe' },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563268603/Facilities/P6200044_b2t9jn.jpg', description: 'farm' },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563268557/Facilities/P6200053_syppgl.jpg', description: 'rocquet' },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563269224/Facilities/GOPR7509_2_onihhd.jpg', description: 'stanna' },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563269737/Facilities/P6200021_2_r9sgx1.jpg', description: 'court' },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563269209/Facilities/P6200016_2_kdj0fi.jpg', description: 'orchard' },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563268569/Facilities/P6200048_o7luct.jpg', description: 'river' }
    ]
    this.bordesImages = [
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563268465/Facilities/P6200056_wzrqhy.jpg', description: 'bordes' },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/v1563268708/Facilities/DSCF0472_riqio5.jpg', description: 'woodhouse' }
    ]
  }
}
</script>

<style scoped>

</style>

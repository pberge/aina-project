<template>
  <div class="facilities">
    <Spinner id="spinner"/>
    <Gallery title="house" :images="houseImages" />
    <Gallery title="bordes" :images="bordesImages" />
    <Gallery title="outside" :images="outsideImages" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Spinner from '../../shared/components/Spinner.vue'
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

  loadedImages: number = 0
  isGalleryLoaded: boolean = false

  created () {
    this.loadedImages = 0

    this.houseImages = [
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1568102751/Facilities/P9090047_2_zify5c.jpg', description: 'agora', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563209025/Facilities/GOPR7518_huleol.jpg', description: 'bedrooms', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563209326/Facilities/GOPR7520_n2jw5h.jpg', description: 'bathrooms', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563209310/Facilities/GOPR7526_ylh1ck.jpg', description: 'monitorroom', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563209290/Facilities/GOPR7523_v7qwaq.jpg', description: 'pingpongroom', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563268675/Facilities/GOPR7515_d0hnf7.jpg', description: 'woodroom', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1568102657/Facilities/P9090042_drx1q5.jpg', description: 'stGalderic', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1568102624/Facilities/P9090049_bliiqo.jpg', description: 'livingroom', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1571302435/Facilities/Arlequins_o0wvkr.jpg', description: 'arlequins', onload: this.imageLoaded }
    ]
    this.outsideImages = [
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563268479/Facilities/P6200063_qdujpm.jpg', description: 'field', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563268614/Facilities/P6200038_qbkca2.jpg', description: 'barbacoe', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563268603/Facilities/P6200044_b2t9jn.jpg', description: 'farm' , onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563268557/Facilities/P6200053_syppgl.jpg', description: 'rocquet', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563269224/Facilities/GOPR7509_2_onihhd.jpg', description: 'stanna', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563269737/Facilities/P6200021_2_r9sgx1.jpg', description: 'court', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563269209/Facilities/P6200016_2_kdj0fi.jpg', description: 'orchard', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563268569/Facilities/P6200048_o7luct.jpg', description: 'river', onload: this.imageLoaded }
    ]
    this.bordesImages = [
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563268465/Facilities/P6200056_wzrqhy.jpg', description: 'bordes', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1563268708/Facilities/DSCF0472_riqio5.jpg', description: 'woodhouse', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1571302954/Facilities/SalaBlava_vicw8a.jpg', description: 'stJordi', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1571303905/Facilities/Entrada_SanSerni_2_zkkdyf.jpg', description: 'sanSerni', onload: this.imageLoaded },
      { img: 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_500/v1571304108/Facilities/Meritxell_exterior_2_scbkhs.jpg', description: 'meritxell', onload: this.imageLoaded }
    ]
  }

  imageLoaded = () => {
    this.loadedImages++
    if (this.loadedImages === 16) {
      document.getElementById('spinner').classList.add("invisible")
    }
  }

}
</script>

<style scoped>
.invisible {
  visibility: hidden !important;
}

@media (max-width: 676px) { /*MOBILE*/
  .facilities {
    padding: 0;
  }
}
</style>

<template>
    <div class="donacions-card">
        <img class="image" :src="image">
        <span class="title">{{info.descripcio}}</span>
        <div class="row">
            <div class="player-holder">
                <img class="colaboradorImage" :src="info.imgColaborador" />
            </div>
            <div class="info-container col-xs-9">
                <span class="colaborador">{{info.nomColaborador}}</span>
                <span class="esport" style="display:block;">{{info.esportColaborador}}</span>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ObjecteDonacio from '../../../shared/models/objecteDonacio'

@Component
export default class DonacionsCard extends Vue {
    @Prop() info!: ObjecteDonacio
    image: string = ''

    mounted () {
        console.log(this.info)
        if(this.info.img == '') this.image = 'https://res.cloudinary.com/ainacloud/image/upload/c_scale,q_auto:eco,w_1500/v1567704022/Default/P6200059_cybiu5.jpg'
        else {
            let imgSplit = this.info.img.split('upload')
            this.image = imgSplit[0] + 'upload/c_scale,q_auto:eco,w_1000' + imgSplit[1]
        }
    }
}
</script>

<style scoped>
.donacions-card {
    display: flex;
    flex-direction: column;
    max-width: 16em;
    max-height: 20em;
    margin: 1em;
    font-size: 1em;
    transition: 0.3s;
    border-radius: 3px;
    position: relative;
    padding-bottom: 0.5em;
}



.image {
    position: relative;
    float: left;
    width:  16em;
    height: 10em;
    background-position: 50% 50%;
    background-repeat:   no-repeat;
    background-size:     cover;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    padding: 0;
    object-fit: cover;
}

.info-container {
    text-align: left;
    padding: 12px 12px;
}

.title {
    padding: 0.5em 0em;
    display: block;
    font-weight: bold;
    padding-bottom: 5px;
    padding-top: 15px;
}

.text:before {
    background:linear-gradient(transparent 10px, white);
}

.colaborador {
    padding-top: 0.7em;
}

.esport {
    padding: 0em 0;
}

.player-holder{
   height:50px;
   max-width:100px;
   text-align: center;
}
.player-thumb{
   width: 50px;
   height: 50px;
   display: inline-block;
   border-radius: 50%;
   background-size: cover;
   background-position: center;
}

.colaboradorImage {
    height: 50px;
    border-radius: 50%;
    width: 50px;
    margin-top:0.5em;
    display: inline-block;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
}

@media (max-width: 676px) { /*MOBILE*/
  .donacions-card {
    margin: 0;
    max-width: 100%;
    margin-bottom: 1em;
  }

  .image {
      width: 100%;
      height: 13em;
  }
}

</style>

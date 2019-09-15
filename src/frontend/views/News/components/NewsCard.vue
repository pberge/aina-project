<template>
    <div class="news-card">
        <img :src="newInfo.img">
        <div class="title">{{newInfo.title}}</div>
        <span class="date">{{newInfo.creationdate}}</span>
    </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import New from '../../../shared/models/new'

@Component
export default class NewsCard extends Vue {
    @Prop() newInfo!: New

    mounted () {
        if(this.newInfo.img == '') this.newInfo.img = 'https://res.cloudinary.com/ainacloud/image/upload/v1567704022/Default/P6200059_cybiu5.jpg'
    }
}
</script>

<style scoped>
.news-card {
    display: flex;
    flex-direction: column;
    max-width: 16em;
    max-height: 20em;
    margin: 1em;
    font-size: 1em;
    transition: 0.3s;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    padding-bottom: 0.5em;
}

.news-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.news-card:hover img {
    opacity: 0.8;
    transition: opacity 0.3s;
}

img {
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

.title {
    padding: 1em 1em;
    padding-bottom: 2em;
}

.text:before {
    background:linear-gradient(transparent 10px, white);
}

.date {
    position: absolute;
    right: 2em;
    bottom: 2em;
    font-size: 0.5em;
}

</style>

<template>
    <div class="news-card">
        <img :src="newInfo.img">
        <span class="title">{{newInfo.title}}</span>
        <span class="text">{{newInfo.text}}</span>
        <span class="date">{{newInfo.creationdate}}</span>
    </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import New from '../../../shared/models/new'

@Component
export default class NewsCard extends Vue {
    @Prop() newInfo!: New
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
    max-width: 16em;
    max-height: 10em;
    padding: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.title {
    padding: 1em 1em;
}

.text {
    height: 30%;
    padding: 0 1em;
    padding-bottom: 1em;
    margin: 0;
    text-align: justify;
    font-size: 0.8em;
    background: linear-gradient(to bottom, #000000 0%, #F6F3F3 85%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.text:before {
    background:linear-gradient(transparent 10px, white);
}

.date {
    position: absolute;
    left: 2em;
    bottom: 2em;
    font-size: 0.5em;
}

</style>
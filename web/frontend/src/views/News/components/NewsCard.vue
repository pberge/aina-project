<template>
    <div class="news-card row">
        <img class="col-xs-12" src="@/assets/home.jpg">
        <span class="col-xs-12 title">{{newInfo.title}}</span>
        <p class="text">{{newInfo.text}}</p>
        <!-- <span class="read-more">Llegir més</span> -->
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import NewCard from '@/shared/objects/newCard'

@Component
export default class NewsCard extends Vue {
    @Prop() newInfo: NewCard
	
}
</script>

<style scoped>
.news-card {
    max-width: 16em;
    margin: 1em;
    font-size: 1em;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    justify-content: center;
    padding-bottom: 0.5em;
}

.news-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img {
    max-width: 16em;
    max-height: 10em;
    padding: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.title {
    padding: 1em;
}

.text {
    padding: 0 1em;
    padding-bottom: 1em;
    margin: 0;
    text-align: justify;
    font-size: 0.8em;
    background: linear-gradient(to bottom, #000000 40%, #F6F3F3 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.text:before {
    background:linear-gradient(transparent 10px, white);
}

.read-more {
    position: absolute;
    bottom: 1em;
    border: 1px solid;
    padding: 0.5em;
    background-color: white;
    border-radius: 3px; 
}

</style>
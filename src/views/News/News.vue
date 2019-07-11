<template>
	<div class="news row">
		<router-link v-for="(item, i) in news" :key="i" :to="getRoute(item.id)" >
			<NewsCard :newInfo="item" />
		</router-link>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import New from '../../shared/models/new'
import NewsCard from './components/NewsCard.vue'
import api from '../../shared/api'

@Component({
	components: {
		NewsCard
	}
})
export default class News extends Vue {
	news: New[] = []
	
	async mounted () {
		this.news = await api.News.getAllNews()
	}

	getRoute(id: string) {
		return "new-detail/"+ id
	}
}
</script>

<style scoped>
.news {
	justify-content: center;
}

</style>
<template>
	<div class="news row">
		<NewsCard v-for="(item, i) in news" :key="i" :newInfo="item"/>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import newCard from '../../shared/objects/newCard';
import NewsCard from './components/NewsCard.vue';

@Component({
	components: {
		NewsCard
	}
})
export default class News extends Vue {
	news: newCard[] = []
	
	mounted () {
			//call API to get news
			this.news = [
				{'img': '@/assets/home.jpg', 'title': 'Preinscripcions online!', 'text': 'Des de la Casa de ' +
					'colònies d’AINA, es comunica que el procés d’inscripció per a les Colònies' +
					'Populars de Canillo d’aquest estiu 2019 canvia el seu procediment habitual i es '+
					'durà a terme en format electrònic. Aquest canvi en el procés només serà vàlid '+
					'per als nens i nenes que s’inscriguin en els torns de colònies destinats a la '+
					'Casa i a la Borda, és a dir, els infants de 7 a 14 anys.', 'date': '12/02/1998'},
				{'img': '@/assets/home.jpg', 'title': 'Preinscripcions online!', 'text': 'Des de la Casa de ' +
				'colònies d’AINA, es comunica que el procés d’inscripció per a les Colònies' +
				'Populars de Canillo d’aquest estiu 2019 canvia el seu procediment habitual i es '+
				'durà a terme en format electrònic. Aquest canvi en el procés només serà vàlid '+
				'per als nens i nenes que s’inscriguin en els torns de colònies destinats a la '+
				'Casa i a la Borda, és a dir, els infants de 7 a 14 anys.', 'date': '12/02/1998'},
				{'img': '@/assets/home.jpg', 'title': 'Preinscripcions online!', 'text': 'Des de la Casa de ' +
				'colònies d’AINA, es comunica que el procés d’inscripció per a les Colònies' +
				'Populars de Canillo d’aquest estiu 2019 canvia el seu procediment habitual i es '+
				'durà a terme en format electrònic. Aquest canvi en el procés només serà vàlid '+
				'per als nens i nenes que s’inscriguin en els torns de colònies destinats a la '+
				'Casa i a la Borda, és a dir, els infants de 7 a 14 anys.', 'date': '12/02/1998'},
				{'img': '@/assets/home.jpg', 'title': 'Preinscripcions online!', 'text': 'Des de la Casa de ' +
				'colònies d’AINA, es comunica que el procés d’inscripció per a les Colònies' +
				'Populars de Canillo d’aquest estiu 2019 canvia el seu procediment habitual i es '+
				'durà a terme en format electrònic. Aquest canvi en el procés només serà vàlid '+
				'per als nens i nenes que s’inscriguin en els torns de colònies destinats a la '+
				'Casa i a la Borda, és a dir, els infants de 7 a 14 anys.', 'date': '12/02/1998'},
			]
	}
}
</script>

<style scoped>
.news {
	justify-content: center;
}
</style>
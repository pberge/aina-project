<template>
	<div class="new-detail">
		asdfasdfads
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SideBar from '../../shared/components/SideBar.vue'
@Component({
	components: {
		SideBar
	}
})
export default class NewsDetail extends Vue {
	// id!: string

	mounted () {
		// this.id = this.$route.params.id
		console.log("adsfad")
	}
}
</script>

<style scoped>

.new-detail {
	color: blue;
}

</style>
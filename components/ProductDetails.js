app.component('product-details', {
	props: {
		details: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			details: ['50% cotton', '30% wool', '20% polyester']
		}
	},
	computed: {
		details() {
			<ul>
			<li v-for="detail in details">{{ detail }}</li>
			</ul>
			return
		}
	}
})

import Vue from "vue";
Vue.component("xdetail",{
	template:`
		<div>
			<p>asjdasdhkajsd</p>
		</div>
	`,
	mounted(){
		//detail/1
		console.log(this.$route.params.id)
		//detail/?id=1
		console.log(this.$route.query.id)
	}
})

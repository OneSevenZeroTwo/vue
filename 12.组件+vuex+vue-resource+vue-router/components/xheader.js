Vue.component("xheader", {
	template: `
			<div>
				<header>
					{{title}}
				</header>
			</div>
	`,
	computed: {
		title() {
			//暴力获取状态
			//this.$store.state.title
			return this.$store.getters.getCount
		}
	}
})
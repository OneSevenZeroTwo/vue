<!--HTML-->
<template>
	<div>
		<p>asjdasdhkajsd</p>
	</div>
</template>
<!--JS-->
<script>
	export default {
		mounted() {
			//detail/1
			console.log(this.$route.params.id)
				//detail/?id=1
			console.log(this.$route.query.id)
		}
	}
</script>
<!--CSS-->
<style scoped lang="sass">
	$size = 20px;
	p {
		color: red;
		font-size: $size;
	}
</style>
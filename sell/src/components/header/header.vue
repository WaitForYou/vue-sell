<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avater">
				<img width="64px" height="64px" :src="seller.avatar">
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
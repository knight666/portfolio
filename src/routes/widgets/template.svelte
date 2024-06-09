<script lang="ts">
	let className = '';
	export { className as class };
</script>

<section
	class={['a-button', className].join(' ')}
></section>

<style lang="scss">
	@import '$styles/globals';
</style>
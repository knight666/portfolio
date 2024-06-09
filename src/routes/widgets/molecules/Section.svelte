<script lang="ts">
	export let content = '';

	let className = '';
	export { className as class };
</script>

<section
	class={['m-section', className].join(' ')}
>
	{content}
</section>

<style lang="scss">
	@import '$styles/globals';

	.m-section {
		display: flex;
		flex-direction: column;
		padding: 0 24vw;

		> p {
			padding: 0 12px;
		}
	}
</style>
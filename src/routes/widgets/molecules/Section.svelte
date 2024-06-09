<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";

	export let content = '';

	let className = '';
	export { className as class };
</script>

<section
	class={['m-section', className].join(' ')}
>
	<SvelteMarkdown
		source={content}
	></SvelteMarkdown>
</section>

<style lang="scss">
	@import '$styles/globals';

	.m-section {
		display: flex;
		flex-direction: column;
		padding: 0 24vw;
	}

	:global(.m-section p) {
		padding: 0 12px;
	}
</style>
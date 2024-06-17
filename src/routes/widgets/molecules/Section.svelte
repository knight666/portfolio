<script lang="ts">
	import ImagePreview from "$widgets/atoms/ImagePreview.svelte";
	import SvelteMarkdown from "svelte-markdown";
	import { marked } from 'marked';

	export let content: string | marked.TokensList = '';

	let className = '';
	export { className as class };
</script>

<section
	class={['m-section', className].join(' ')}
>
	<SvelteMarkdown
		source={content}
		renderers={{
			image: ImagePreview
		}}
	></SvelteMarkdown>
</section>

<style lang="scss">
	@import '$styles/globals';

	:global(.m-section) {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 0 auto;
	}

	:global(.m-section > p) {
		max-width: 70ch;
		margin: 0;
	}

	:global(.m-section > h3) {
		margin-top: 1rem;
	}

	@include size-small {
		:global(.m-section) {
			padding: 0 6vw;
		}
	}

	@include size-medium {
		:global(.m-section) {
			padding: 0 12vw;
		}
	}
</style>
<script lang="ts">
	import ImagePreview from "$widgets/atoms/ImagePreview.svelte";
	import SvelteMarkdown from "svelte-markdown";
	import { marked } from 'marked';

	export let content: string | marked.TokensList = '';

	const renderer = new marked.Renderer;
	renderer.paragraph = function (text) {
		// do not enclose images in additional paragraphs

		if (text.match(/^<(figure|img)/)) {
			return text;
		}

		return `<p>${text}</p>`;
	};

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
		padding: 0 24vw;
	}
</style>
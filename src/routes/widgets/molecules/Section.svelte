<script lang="ts">
	import Image from "$widgets/atoms/Image.svelte";
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
		renderers={{ image: Image }}
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
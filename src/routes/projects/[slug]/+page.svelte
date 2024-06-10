<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";
	import type { PageData } from "./$types";
	import { marked } from 'marked'

	export let data: PageData;

	const tokens = marked.lexer(data.source);
	marked.walkTokens(tokens, (token) => {
		if (token.type == 'heading') {
			token.depth = 3;
		}
	});
</script>

<div class="m-section">
	<div class="m-section__container">
		<SvelteMarkdown
			source={tokens}
		></SvelteMarkdown>
	</div>
</div>

<style lang="scss">
	@import '$styles/globals';
	@import '$styles/tools/fonts';
</style>
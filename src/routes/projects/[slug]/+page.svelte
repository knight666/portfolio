<script lang="ts">
	import type { PageData } from "./$types";
	import { marked } from 'marked';
	import Section from "$widgets/molecules/Section.svelte";

	export let data: PageData;

	const tokens = marked.lexer(data.source);
	marked.walkTokens(tokens, (token) => {
		if (token.type == 'heading') {
			token.depth = 3;
		} else if (token.type == 'image') {
			token.href = `../media/screenshots/${token.href}`;
			console.log(token.raw);
			console.log(token.text);
		}
	});
</script>

<Section
	content={tokens}
></Section>

<style lang="scss">
	@import '$styles/globals';
	@import '$styles/tools/fonts';
</style>
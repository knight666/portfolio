<script lang="ts">
	import '../../styles/toolkit.scss';

	import { marked } from 'marked';
	import Section from "$widgets/molecules/Section.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	const tokens = marked.lexer(data.source);
	marked.walkTokens(tokens, (token) => {
		if (token.type == 'heading') {
			token.depth = 3;
		} else if (token.type == 'image') {
			token.href = `../media/screenshots/${token.href}`;
		}
	});
</script>

<Section
	content={tokens}
></Section>
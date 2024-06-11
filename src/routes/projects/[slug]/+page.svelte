<script lang="ts">
	import '../../styles/toolkit.scss';

	import { marked } from 'marked';
	import Section from "$widgets/molecules/Section.svelte";
	import Trailer from "$widgets/molecules/Trailer.svelte";
	import Footer from '$widgets/organisms/Footer.svelte';
	import ProjectHeader from '$widgets/organisms/ProjectHeader.svelte';
	import type { PageData } from "./$types";
	import type { IProject } from '../../../project-types';

	export let data: PageData;

	const project = data as unknown as IProject;

	const tokens = marked.lexer(data.source);
	marked.walkTokens(tokens, (token) => {
		if (token.type == 'heading') {
			token.depth = 3;
		} else if (token.type == 'image') {
			token.href = `../media/screenshots/${token.href}`;
		}
	});
</script>

<ProjectHeader {project}></ProjectHeader>

<div class="o-projectTrailer">
	<Trailer
		title={project.title}
		link={project.trailer.link}
	></Trailer>
</div>

<Section
	content={tokens}
></Section>

<Footer></Footer>

<style lang="scss">
	@import '$styles/globals';

	.o-projectTrailer {
		padding: 0 12vw;
	}
</style>
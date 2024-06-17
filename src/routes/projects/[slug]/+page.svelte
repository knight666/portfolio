<script lang="ts">
	import '$styles/toolkit.scss';

	import { marked } from 'marked';
	import Section from "$widgets/molecules/Section.svelte";
	import Trailer from "$widgets/molecules/Trailer.svelte";
	import Footer from '$widgets/organisms/Footer.svelte';
	import Header from '$widgets/organisms/Header.svelte';
	import type { PageData } from "./$types";
	import type { IBreadcrumb, IProject } from '../../../project-types';

	export let data: PageData;

	const project = data as unknown as IProject;

	const breadcrumbs: IBreadcrumb[] = [
		{ url: '/', title: 'Home' },
		{ url: '/projects-by-date', title: 'Projects' },
		{ url: `/projects/${project.id}`, title: project.title },
	];

	const tokens = marked.lexer(data.source);
	marked.walkTokens(tokens, (token) => {
		if (token.type == 'heading') {
			token.depth = 3;
		} else if (token.type == 'image') {
			token.href = `../media/screenshots/${token.href}`;
		}
	});
</script>

<svelte:head>
	<title>Quinten Lansu - {project.title}</title> 
</svelte:head>

<Header {breadcrumbs}></Header>

<div class="o-projectTrailer">
	<Trailer
		title={project.title}
		trailer={project.trailer}
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
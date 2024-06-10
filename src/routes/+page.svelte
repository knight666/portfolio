<script lang="ts">
	import Section from "$widgets/molecules/Section.svelte";
	import AtAGlance from "$widgets/organisms/AtAGlance.svelte";
	import HomeHeader from "$widgets/organisms/HomeHeader.svelte";
	import Project from "$widgets/organisms/Project.svelte";

	import intro from '../intro.md?raw';

	import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<HomeHeader></HomeHeader>

<Section content={intro}>
</Section>

<h1>At a glance</h1>
<AtAGlance></AtAGlance>

<h1>Projects</h1>
<div class="project-list">
	{#each data.featured as p}
	<Project
		fileName={p}
	></Project>
	{/each}
</div>

<style lang="scss">
	@import 'styles/globals';
	@import 'styles/tools/fonts';

	// Body

	:global(body) {
		@include text-paragraph('M');
		display: grid;
		grid-row-gap: $body-gap;
		line-height: 1.42857143;
		margin: 0;
	}

	:global(*) {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	// Headings

	:global(h1) {
		@include text-header('XL');
		text-align: center;
		color: $clr-highlight-500;
	}

	:global(h2) {
		@include text-header('L');
		text-align: left;
		color: $clr-highlight-500;
	}

	:global(h3) {
		@include text-header('M');
		text-align: left;
		color: $clr-highlight-500;
		margin: 0;
	}

	@include size-small {
		:global(h1) {
			@include text-size('L');
		}

		:global(h2) {
			@include text-size('M');
		}
	}

	// Paragraph

	:global(p) {
		@include text-paragraph('M');
		line-height: 1.42857143;
		color: #333333;
		max-width: 70ch;
		margin: 0 0 12px;
	}

	@include size-small {
		:global(p) {
			@include text-size('S');
		}
	}

	// Projects

	.project-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 120px 60px;
		box-sizing: border-box;
		list-style: none;
		width: 100%;
		padding: 0 6vw;
		margin: 0 0 120px 0;
	}
</style>
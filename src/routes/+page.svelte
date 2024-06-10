<script lang="ts">
	import '$styles/toolkit.scss';

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
	{#each data.projects as p}
	<Project
		project={p}
	></Project>
	{/each}
</div>

<style lang="scss">
	@import '$styles/globals';

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

	@include size-small() {
		.project-list {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}
	}

	@include size-medium() {
		.project-list {
			grid-gap: 60px 30px;
		}
	}
</style>
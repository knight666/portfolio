<script lang="ts">	
	import '$styles/toolkit.scss';

	import AtAGlance from "$widgets/organisms/AtAGlance.svelte";
	import Footer from '$widgets/organisms/Footer.svelte';
	import Header from "$widgets/organisms/Header.svelte";
	import Project from "$widgets/organisms/Project.svelte";
	import Section from "$widgets/molecules/Section.svelte";

	import intro from '../intro.md?raw';
	import aboutMe from '../about_me.md?raw';

	import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<svelte:head>
	<title>Quinten Lansu - Portfolio</title> 
</svelte:head>

<Header></Header>

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

<h1>About Me</h1>
<Section content={aboutMe}>
</Section>

<Footer></Footer>

<style lang="scss">
	@import '$styles/globals';

	// Projects

	.project-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 48px 48px;
		box-sizing: border-box;
		list-style: none;
		width: 100%;
		padding: 0 6vw;
	}

	@include size-small {
		.project-list {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}
	}

	@include size-medium {
		.project-list {
			grid-gap: 60px 30px;
		}
	}
</style>
<script lang="ts">
	import '$styles/toolkit.scss';
	import type { PageData } from "./$types";
	import type { IBreadcrumb, IProject } from '../../project-types';
	import Footer from '$widgets/organisms/Footer.svelte';
	import Header from '$widgets/organisms/Header.svelte';
	import Section from '$widgets/molecules/Section.svelte';

	export let data: PageData;

	const projectList = data as Record<string, IProject[]>;

	const breadcrumbs: IBreadcrumb[] = [
		{ url: '/', title: 'Home' },
		{ url: '/projects-by-date', title: 'Projects' },
	];
</script>

<Header {breadcrumbs}></Header>

<section class="m-section">
{#each Object.keys(projectList) as key}
	<h2>{key}</h2>
	{#each projectList[key] as project}
		<h3>{project.title}</h3>
	{/each}
{/each}
</section>

<Footer></Footer>
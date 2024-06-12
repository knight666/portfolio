<script lang="ts">
	import '$styles/toolkit.scss';
	import type { PageData } from "./$types";
	import type { IBreadcrumb, IProject } from '../../project-types';
	import Header from '$widgets/organisms/Header.svelte';
	import Footer from '$widgets/organisms/Footer.svelte';

	export let data: PageData;

	const projectList = data as unknown as {
		projects: IProject[]
	};

	const breadcrumbs: IBreadcrumb[] = [
		{ url: '/', title: 'Home' },
		{ url: '/projects-by-date', title: 'Projects' },
	];
</script>

<Header {breadcrumbs}></Header>

{#each projectList.projects as p}
	<h2>{p.title}</h2>
{/each}

<Footer></Footer>
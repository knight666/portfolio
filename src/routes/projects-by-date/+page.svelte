<script lang="ts">
	import '$styles/toolkit.scss';
	import type { PageData } from "./$types";
	import type { IProject } from '../../project-types';
	import Footer from '$widgets/organisms/Footer.svelte';

	export let data: PageData;

	const projectList = data as unknown as {
		projects: IProject[]
	};
</script>

{#each projectList.projects as p}
	<h2>{p.title}</h2>
{/each}

<Footer></Footer>
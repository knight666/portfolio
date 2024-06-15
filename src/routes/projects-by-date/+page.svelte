<script lang="ts">
	import '$styles/toolkit.scss';
	import type { PageData } from "./$types";
	import type { IBreadcrumb, IProject } from '../../project-types';
	import Footer from '$widgets/organisms/Footer.svelte';
	import Header from '$widgets/organisms/Header.svelte';

	export let data: PageData;

	const projectList = data as Record<string, IProject[]>;

	const projectKeys = Object.keys(projectList).sort((a, b) => {
		if (Number(a) < Number(b)) {
			return 1;
		}
		return -1;
	});

	const breadcrumbs: IBreadcrumb[] = [
		{ url: '/', title: 'Home' },
		{ url: '/projects-by-date', title: 'Projects' },
	];
</script>

<Header {breadcrumbs}></Header>

<section class="o-project-list">
{#each projectKeys as key}
	<div class="o-project-list__entry">
		<h2 class="o-project-list__title">{key}</h2>
		{#each projectList[key] as project}
			<a
				class="o-project-list__link"
				href={`/projects/${project.id}`}
			>
				{project.title}
			</a>
		{/each}
	</div>
{/each}
</section>

<Footer></Footer>

<style lang="scss">
	@import '$styles/globals';

	.o-project-list {
		padding: 0 12vw;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		&__entry {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}

		&__title {
			border-bottom: 1px solid get-shade($clr-highlight, 500);
			margin-bottom: 0.5rem;
		}

		&__link {
			color: get-shade($clr-highlight, 700);
			text-decoration: none;
		}
	}
</style>
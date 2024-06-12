<script lang="ts">
	import type { IBreadcrumb } from "../../../project-types";

	export let breadcrumbs: IBreadcrumb[] = [];

	const breadcrumbsBefore: IBreadcrumb[] =
		(breadcrumbs.length > 1)
			? breadcrumbs.slice(0, -1)
			: [];

	const breadcrumbLast: IBreadcrumb =
		(breadcrumbs.length > 0)
			? breadcrumbs[breadcrumbs.length - 1]
			: { url: '', title: '' };

	function getClassNames(name: string) {
		const combined = ['o-homeHeader'];
		if (breadcrumbs.length > 0) {
			combined.push('o-homeHeader--breadcrumbs');
		}
		combined.push(name);

		return combined.join(' ');
	}

	let className = '';
	export { className as class };
</script>

<header class={getClassNames(className)}>
	<div class="o-homeHeader__container">
		<div class="o-homeHeader__headshot"></div>
		{#if breadcrumbs.length === 0}
		<div class="o-homeHeader__intro">
			<p>Hello there!</p>
			<p>My name is <em>Quinten Lansu</em></p>
			<p>and I build <em>user interfaces</em></p>
		</div>
		{/if}
		{#if breadcrumbs.length > 0}
		<div class="o-homeHeader__breadcrumbs">
			{#each breadcrumbsBefore as b}
			<a class="o-homeHeader__breadcrumbs__item" href={b.url}>{b.title}</a>
			<div class="o-homeHeader__breadcrumbs__item">/</div>
			{/each}
		</div>
		<h2 class="o-homeHeader__title">{breadcrumbLast.title}</h2>
		{/if}
	</div>
</header>

<style lang="scss">
	@import '$styles/globals';

	.o-homeHeader {
		$this: &;

		display: flex;
		justify-content: center;
		align-items: center;
		background: get-shade($clr-highlight, 500);
		color: white;
		min-height: 240px;
		padding: 12px;

		&--breadcrumbs {
			padding: 12px 12vw;
			justify-content: flex-start;
			min-height: auto;
		}

		&__container {
			display: grid;
			grid-template-columns: 1fr 4fr;
			grid-template-areas: 
				"face  intro       ";
			grid-column-gap: 24px;
			align-items: center;

			#{$this}--breadcrumbs & {
				grid-template-columns: min-content 1fr;
				grid-template-areas: 
					"face  breadcrumbs  "
					"face  title        ";
			}
		}

		&__title {
			grid-area: title;
			color: white;
		}

		&__headshot {
			grid-area: face;
			display: table;
			width: 120px;
			height: 120px;
			background: url('/media/images/profile.jpg') center/contain no-repeat;
			border: 4px solid white;
			border-radius: 50%;
			margin: 5px;

			#{$this}--breadcrumbs & {
				width: 60px;
				height: 60px;
			}
		}

		&__breadcrumbs {
			grid-area: breadcrumbs;
			display: grid;
			grid-template-columns: repeat(4, min-content);
			grid-column-gap: 12px;
			list-style: none;
			padding: 0;
			margin: 0;

			&__item {
				color: get-shade($clr-highlight, 300);
				text-transform: uppercase;
			}
		}

		&__intro {
			grid-area: intro;

			p {
				@include text-sans-serif('XL');
				color: white;
				line-height: initial;
			}

			em {
				font-weight: bold;
				font-style: normal;
			}
		}
	}

	@include size-small {
		.o-homeHeader {
			$this: &;

			&--breadcrumbs {
				justify-content: center;
			}

			&__container {
				grid-template-columns: 1fr;
				grid-template-rows: 1fr min-content;
				grid-template-areas: 
					"face         "
					"intro        ";
				grid-row-gap: 12px;
				justify-items: center;
				padding: 12px;

				#{$this}--breadcrumbs & {
					grid-template-columns: 1fr;
					grid-template-rows: 1fr min-content min-content;
					grid-template-areas: 
						"face         "
						"breadcrumbs  "
						"title        ";
					grid-row-gap: 12px;
					justify-items: center;
					padding: 12px;
				}
			}

			&__intro {
				p {
					@include text-sans-serif('L');
				}
			}
		}
	}

	@include size-medium {
		.o-homeHeader {
			$this: &;

			&__container {
				grid-template-columns: 1fr 2fr;

				#{$this}--breadcrumbs & {
					align-content: center;
				}
			}

			&__intro {
				p {
					@include text-sans-serif('L');
				}
			}
		}
	}
</style>
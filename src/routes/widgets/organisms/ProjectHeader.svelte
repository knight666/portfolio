<script lang="ts">
	import type { IProject } from "../../../project-types";

	export let project: IProject;
</script>

<header class="o-projectHeader">
	<div class="o-projectHeader__headshot"></div>
	<div class="o-projectHeader__breadcrumbs">
		<a class="o-projectHeader__breadcrumbs__item" href="/">Home</a>
		<div class="o-projectHeader__breadcrumbs__item">/</div>
		<a class="o-projectHeader__breadcrumbs__item" href="../projects-by-date.html">Projects</a>
		<div class="o-projectHeader__breadcrumbs__item">/</div>
	</div>
	<h2 class="o-projectHeader__title">{project.title}</h2>
</header>

<style lang="scss">
	@import '$styles/globals';

	.o-projectHeader {
		display: grid;
		grid-template-columns: min-content 1fr;
		grid-template-areas: 
			"face  breadcrumbs  "
			"face  title        ";
		grid-column-gap: 24px;
		align-items: center;
		background: get-shade($clr-highlight, 500);
		color: white;
    	padding: 12px 12vw;

		&__headshot {
			grid-area: face;
			display: table;
			width: 60px;
			height: 60px;
			background: url('/media/images/profile.jpg') center/contain no-repeat;
			border: 4px solid white;
			border-radius: 50%;
			margin: 5px;
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

		&__title {
			grid-area: title;
			color: white;
		}
	}

	@include size-small {
		.o-projectHeader {
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

	@include size-medium {
		.o-projectHeader {
			align-content: center;
		}
	}
</style>
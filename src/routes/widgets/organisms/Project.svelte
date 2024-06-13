<script lang="ts">
	import { type IProject } from "../../../project-types";
	import LinkButton from "$widgets/atoms/LinkButton.svelte";

	export let project: IProject;

	let className = '';
	export { className as class };
</script>

<a
	class={['o-project', className].join(' ')}
	href="projects/{project.id}"
>
	<div
		class="o-project__preview"
		style="background-image: url('./media/previews/{project.trailer.image}')"
	>
	</div>
	<div class="o-project__header">
		{project.title}
		<div class="o-project__company">{project.employer.name}</div>
	</div>
	<p class="o-project__description">{project.brief.description}</p>
</a>

<style lang="scss">
	@import '$styles/globals';

	.o-project {
		$padding: 1rem;

		display: grid;
		grid-row-gap: 0.5rem;
		grid-template-columns: 1fr;
		grid-template-rows:
			min-content
			min-content
			min-content
			min-content;
		grid-template-areas: 
			"preview  "
			"header   "
			"desc     "
			"link     ";
		text-decoration: none;
		color: initial;
		filter: drop-shadow(1px 2px 2px lightgray);
		background: white;
		border-radius: 0.5rem;

		&:hover {
			filter: drop-shadow(3px 4px 8px gray);
		}

		&__preview {
			grid-area: preview;
			position: relative;
			overflow: hidden;
			height: 0;
			background-size: auto;
			background-position: center;
			background-repeat: no-repeat;
			padding-top: 56.25%;
			border-top-left-radius: 0.5rem;
			border-top-right-radius: 0.5rem;
			background-size: 100%;
			transition: background-size 0.4s;
		}

		&__header {
			grid-area: header;
			@include text-paragraph('l');
			display: flex;
			flex-direction: column;
			font-weight: bold;
			padding: 0 $padding;
		}

		&__company {
			grid-area: company;
			@include text-paragraph('m');
			text-transform: uppercase;
			color: get-shade($clr-highlight, 400);
			font-weight: normal;
		}

		&__description {
			grid-area: desc;
			padding: 0 $padding;
		}

		&__link {
			grid-area: link;
			display: flex;
			align-self: center;
			justify-self: flex-end;

			> * {
				width: 100%;
			}
		}
	}

	@include size-medium {
		.o-project {
			&__header {
				@include text-size('m');
			}

			&__company {
				@include text-size('s');
			}

			&__description {
				@include text-size('s');
			}
		}
	}

	@include size-small {
		.o-project {
			&__header {
				@include text-size('m');
			}

			&__company {
				@include text-size('s');
			}
		}
	}
</style>
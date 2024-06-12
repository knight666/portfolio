<script lang="ts">
	import { type IProject } from "../../../project-types";
	import LinkButton from "$widgets/atoms/LinkButton.svelte";

	export let project: IProject;

	let className = '';
	export { className as class };
</script>

<div
	class={['o-project', className].join(' ')}
>
	<a
		class="o-project__preview"
		href="projects/{project.id}"
		style="background-image: url('./media/previews/{project.trailer.image}')"
	>
	</a>
	<div class="o-project__header">
		{project.title}
		<div class="o-project__company">{project.employer.name}</div>
	</div>
	<p class="o-project__description">{project.brief.description}</p>
	<div class="o-project__link">
		<LinkButton
			class="a-button--secondary"
			url="projects/{project.id}"
			text="&gt; READ MORE"
		></LinkButton>
	</div>
</div>

<style lang="scss">
	@import '$styles/globals';

	.o-project {
		display: grid;
		grid-row-gap: 0.5rem;
		grid-template-columns: 1fr;
		grid-template-rows:
			1fr
			min-content
			min-content
			min-content;
		grid-template-areas: 
			"preview  "
			"header   "
			"desc     "
			"link     ";

		&__preview {
			grid-area: preview;
			position: relative;
			overflow: hidden;
			height: 0;
			background-size: auto;
			background-position: center;
			background-repeat: no-repeat;
			padding-top: 56.25%;
			border-radius: 4px;
			background-size: 100%;
			transition: background-size 0.4s;
		}

		&__header {
			grid-area: header;
			@include text-paragraph('l');
			display: flex;
			flex-direction: column;
			font-weight: bold;
		}

		&__company {
			grid-area: company;
			@include text-paragraph('m');
			font-weight: normal;
		}

		&__description {
			grid-area: desc;
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
				@include text-paragraph('m');
			}

			&__company {
				@include text-paragraph('s');
			}
		}
	}

	@include size-small {
		.o-project {
			&__header {
				@include text-paragraph('m');
			}

			&__company {
				@include text-paragraph('s');
			}
		}
	}
</style>
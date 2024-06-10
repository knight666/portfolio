<script lang="ts">
	import { type IProject } from "../../../project-types";
	import LinkButton from "../atoms/LinkButton.svelte";

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
	<h2 class="o-project__header">{project.title}</h2>
		<p class="o-project__description">{project.brief.description}</p>
		<LinkButton
			class="a-button--secondary o-project__link"
			url="projects/{project.id}"
			text="&gt; READ MORE"
		></LinkButton>
</div>

<style lang="scss">
	@import '$styles/globals';

	.o-project {
		display: grid;
		grid-row-gap: 24px;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(2, min-content) 1fr min-content;
		grid-template-areas: 
			"preview  preview "
			"header   header  "
			"desc     desc    "
			"link     .       ";

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
		}

		&__description {
			grid-area: desc;
		}

		&__link {
			grid-area: link;
		}
	}
</style>
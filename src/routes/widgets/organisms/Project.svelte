<script lang="ts">
	import LinkButton from "../atoms/LinkButton.svelte";

	export let fileName: string;

	interface IProject {
		title: string;
		brief: {
			description: string;
			released: string;
			employer: string;
			platforms: string[];
			technologies: string[]
			role: string;
			type: string;
			stack: string[];
		},
		trailer: {
			link: string;
			image: string;
		}
		source: string;
	};

	const filePromise: Promise<IProject> = import(/* @vite-ignore */ `../../../projects/${fileName}.json`);

	let className = '';
	export { className as class };
</script>

{#await filePromise then file}
	<div
		class={['o-project', className].join(' ')}
	>
		<a
			class="o-project__preview"
			href="projects/{fileName}.html"
			style="background-image: url('./media/previews/{file.trailer.image}')"
		>
		</a>
		<h2 class="o-project__header">{file.title}</h2>
			<p class="o-project__description">{file.brief.description}</p>
			<LinkButton
				class="o-project__link"
				url="projects/{fileName}.html"
				text="&gt; READ MORE"
			></LinkButton>
	</div>
{/await}

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
<script lang="ts">
	import type { ITrailer } from "../../../project-types";

	export let trailer: ITrailer;
	export let title: string;

	const link = trailer.link ?? '';

	function getClassNames(name: string) {
		const combined = ['m-trailer'];
		combined.push(name);

		return combined.join(' ');
	}

	let className = '';
	export { className as class };
</script>

<div
	class={getClassNames(className)}
>
{#if link !== ''}
	<iframe
		class="m-trailer__item"
		src={`https://www.youtube.com/embed/${link.substring('yt://'.length)}`}
		{title}
		allowfullscreen={true}
		frameborder="0"
	></iframe>
{/if}
{#if link === ''}
	<img
		class="m-trailer__item"
		src={`../media/previews/${trailer.image}`}
		alt={title}
	/>
{/if}
</div>

<style lang="scss">
	@import '$styles/globals';

	.m-trailer {
		display: block;
		position: relative;
		width: 100%;
		height: 100%;
		padding: 0 0 56.25% 0;
		overflow: hidden;

		&__item {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: none;
		}
	}
</style>
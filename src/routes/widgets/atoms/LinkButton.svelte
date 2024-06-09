<script lang="ts">
	export let text: string;
	export let url: string;

	let className = '';
	export { className as class };
</script>

<a
	class={['a-button', className].join(' ')}
	href={url}
	target="_blank"
>
	{text}
</a>

<style lang="scss">
	@import '$styles/globals';

	.a-button {
		@include text-header('M');
		background: $clr-highlight-500;
		color: white;
		text-align: center;
		text-decoration: none;
		padding: 12px;
		border: 1px solid transparent;

		&--secondary {
			background: none;
			color: $clr-highlight-500;
			border-color: $clr-highlight-500;
		}

		&:hover {
			text-decoration: none;
			background: $clr-highlight-300;
			color: white;
			border-color: transparent;
		}
	}

	@include size-small {
		.a-button {
			@include text-size('S');
		}
	}
</style>
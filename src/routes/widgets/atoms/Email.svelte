<script lang="ts">
	export let email: string;

	function getClassNames(name: string) {
		const combined = ['a-email'];
		combined.push(name);

		return combined.join(' ');
	}

	let className = '';
	export { className as class };
</script>

<a
	href={email}
	class={getClassNames(className)}
>
	{@html email}
</a>

<style lang="scss">
	@import '$styles/globals';

	.a-email {
		@include text-size('M');
		background: get-shade($clr-highlight, 700);
		color: get-shade($clr-highlight, 100);
		text-decoration: none;
		padding: 8px 12px;
		border-radius: 8px;

		&:hover {
			background: get-shade($clr-highlight, 300);
		}
	}

	@include size-small {
		.a-email {
			@include text-size('S');
		}
	}
</style>
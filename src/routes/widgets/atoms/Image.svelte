<script lang="ts">
	export let href = '';
	export let title = undefined;
	export let text = '';

	let className = '';
	export { className as class };
</script>

<img
	class={['a-image', className].join(' ')}
	src={href}
	{title}
	alt={text}
/>

<style lang="scss">
	@import '$styles/globals';
</style>
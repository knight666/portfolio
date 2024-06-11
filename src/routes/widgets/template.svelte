<script lang="ts">
	function getClassNames(name: string) {
		const combined = ['a-button'];
		combined.push(name);

		return combined.join(' ');
	}

	let className = '';
	export { className as class };
</script>

<section
	class={getClassNames(className)}
></section>

<style lang="scss">
	@import '$styles/globals';
</style>
<script lang="ts">
	function getClassNames(name: string) {
		const combined = ['a-button'];
		combined.push(name);

		return combined.join(' ');
	}

	let className = '';
	export { className as class };
</script>

<div
	class={getClassNames(className)}
></div>

<style lang="scss">
	@import '$styles/globals';
</style>
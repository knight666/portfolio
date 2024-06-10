<script lang="ts">
	export let href = '';
	export let title = '';
	export let text = '';

	let imageTitle = title.replace(/&quot;/g, '"');

	interface IImageProperties {
		orientation: 'left' | 'right';
	};
	let properties: IImageProperties =
		(imageTitle !== '')
			? JSON.parse(imageTitle)
			: { orientation: 'left' };

	function getClassNames(name: string) {
		const combined = ['a-imagePreview'];
		combined.push(`a-imagePreview--${properties.orientation}`);
		combined.push(name);

		return combined.join(' ');
	}

	let className = '';
	export { className as class };
</script>

<div class={getClassNames(className)}>
	<img class="a-imagePreview__image" src={href} title={text} alt={text} />
	<div class="a-imagePreview__text">{text}</div>
</div>

<style lang="scss">
	@import '$styles/globals';

	.a-imagePreview {
		display: block;
		width: 100%;
		text-align: center;
		margin: 1rem 0;

		&__image {
			width: 100%;
		}

		&__text {
			@include text-size('s');
		}
	}
</style>
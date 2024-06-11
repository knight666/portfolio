<script lang="ts">
	export let link: string;
	export let title: string;

	function getClassNames(name: string) {
		const combined = ['m-trailer'];
		combined.push(name);

		return combined.join(' ');
	}

	let className = '';
	export { className as class };

	/**
	 * var video = document.createElement("iframe");
				video.className = "m-trailer__item";
				video.src = "https://www.youtube.com/embed/" + link.substring('yt://'.length) + "?rel=0&vq=highres&autoplay=1";
				video.allowfullscreen = "";

				parent.removeChild(target);
				parent.appendChild(video);
	*/
</script>

<div
	class={getClassNames(className)}
>
	<iframe
		class="m-trailer__item"
		src={`https://www.youtube.com/embed/${link.substring('yt://'.length)}`}
		{title}
		allowfullscreen={true}
		frameborder="0"
	></iframe>
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
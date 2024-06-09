<script lang="ts">
	import Section from "./widgets/molecules/Section.svelte";
	import AtAGlance from "./widgets/organisms/AtAGlance.svelte";
	import HomeHeader from "./widgets/organisms/HomeHeader.svelte";

	let intro = `I'm an experienced front-end developer working in the AAA games industry.

I have shipped multiple AAA video game projects with teams spread all across the globe. I have worked with all kinds of UI frameworks and have even built a few of them myself over the years.

What excites me about front-end development is seeing results quickly and being able to bring creative visions to life. I love working with user experience designers to figure out how to optimize an interaction flow equally as much as I love figuring out an optimal way to grab data from a backend.

And although I mainly work in C++, I built [https://github.com/knight666/portfolio](this portfolio) myself using nothing but HTML and CSS best practices.
`;
</script>

<HomeHeader></HomeHeader>

<Section content={intro}>
</Section>

<section class="m-section">
</section>

<h1>At a glance</h1>
<AtAGlance></AtAGlance>


<style lang="scss">
	@import 'styles/globals';
	@import 'styles/tools/fonts';

	/* Body */

	:global(body) {
		@include text-paragraph('M');
		display: grid;
		grid-row-gap: $body-gap;
		line-height: 1.42857143;
		margin: 0;
	}

	:global(*) {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	/* Headings */

	:global(h1) {
		@include text-header('XL');
		text-align: center;
		color: $clr-highlight-500;
	}

	:global(h2) {
		@include text-header('L');
		text-align: left;
		color: $clr-highlight-500;
	}

	:global(h3) {
		@include text-header('M');
		text-align: left;
		color: $clr-highlight-500;
		margin: 0;
	}

	@include size-small {
		:global(h1) {
			@include text-size('L');
		}

		:global(h2) {
			@include text-size('M');
		}
	}

	/* Paragraph */

	:global(p) {
		@include text-paragraph('M');
		line-height: 1.42857143;
		color: #333333;
		max-width: 70ch;
		margin: 0 0 12px;
	}

	@include size-small {
		:global(p) {
			@include text-size('S');
		}
	}

	/* Thumbnails */

	.thumbnail-box-sm {
		display: block;
		width: 100%;
		text-align: center;
	}

	.thumbnail-sm {
		margin: 0px auto;
	}

	.thumbnail-sm > img {
		width: 100%;
		max-height: 100%;
	}

	@media (min-width: 512px) {
		.thumbnail-box-md {
			display: inline;
			max-width: 240px;
			padding: 0px;
		}
		.thumbnail-box-left {
			float: left !important;
			margin-right: 20px;
		}
		.thumbnail-box-right {
			float: right !important;
			margin-left: 20px;
		}
	}

	/* Project */

	.project-video-load-container {
		display: flex;
		width: 100%;
		height: 100%;
		margin-bottom: 20px;
		vertical-align: middle;
		float: none;
		background-color: #000000;
		border: 1px solid #337AB7;
		border-radius: 4px;
		box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
	}

	.project-video-play-container {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		vertical-align: middle;
		float: none;
	}

	.project-video-play-link {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		color: #000000;
		background-color: #000000;
		text-align: center;
		vertical-align: middle;
		float: none;
		margin: auto;
		border: 0px none;
	}

	.project-video-play-link:hover {
		color: #337AB7;
	}

	.project-video-highlight {
		width: 100%;
		height: 100%;
		vertical-align: middle;
		float: none;
		background-color: rgba(255, 255, 255, 0.0);
		padding: 25% 0px;
	}

	.project-video-play-link:hover > .project-video-highlight {
		background-color: rgba(255, 255, 255, 0.25);
	}

	.project-video-play {
		width: 48px;
		height: 48px;
		line-height: 1.75em;
		background-color: #FFFFFF;
		border-radius: 24px;
		margin: -12px auto 0px auto;
	}

	.project-video-play > .glyphicon {
		left: 2px;
	}
</style>
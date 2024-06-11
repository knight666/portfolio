<script lang="ts">
	import SocialItem from "$widgets/atoms/SocialItem.svelte";

	function getClassNames(name: string) {
		const combined = ['o-footer'];
		combined.push(name);

		return combined.join(' ');
	}

	let className = '';
	export { className as class };
</script>

<footer
	class={getClassNames(className)}
>
	<h1 class="o-footer__header">Let's build something amazing together</h1>
	<p class="o-footer__text">Feel free to reach out to me if you have a question or just want to connect.</p>
	<ul class="o-footer__socials">
		<li>
			<a href="mailto:quintenlansu@gmail.com" class="a-email">quintenlansu@gmail.com</a>
		</li>
		<li>
			<SocialItem
				logo="linkedin"
				href="http://www.linkedin.com/profile/view?id=46334816"
			></SocialItem>
		</li>
		<li>
			<SocialItem
				logo="twitter"
				href="https://twitter.com/knight666"
			></SocialItem>
		</li>
	</ul>
</footer>

<style lang="scss">
	@import '$styles/globals';

	.o-footer {
		display: flex;
		flex-direction: column;
		gap: 24px;
		background: $clr-highlight-500;
		color: $clr-highlight-100;
		padding: 24px;

		&__header {
			@include text-sans-serif('L');
			font-weight: bold;
			text-align: left;
			color: $clr-highlight-100;
		}

		&__text {
			color: white;
		}

		&__socials {
			display: grid;
			grid-template-columns: repeat(3, min-content);
			grid-column-gap: 12px;
			align-items: center;
			list-style: none;
		}
	}
</style>
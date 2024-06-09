<script lang="ts">
	import LinkButton from '../atoms/LinkButton.svelte';
</script>

<section class="o-glance">
	<table class="o-glance__table">
		<tbody>
			<tr>
				<td>Name</td>
				<td>Quinten Lansu</td>
			</tr>
			<tr>
				<td>DOB</td>
				<td>1989-06-30</td>
			</tr>
			<tr>
				<td>Nationality</td>
				<td>Dutch</td>
			</tr>
			<tr>
				<td>Location</td>
				<td>Deventer, The Netherlands</td>
			</tr>
			<tr>
				<td>Phone</td>
				<td>+316 12 77 84 44</td>
			</tr>
			<tr>
				<td>E-Mail</td>
				<td>quintenlansu@gmail.com</td>
			</tr>
		</tbody>
	</table>
	<LinkButton
		class="o-glance__download"
		url="media/CV_Quinten_Lansu_2024.pdf"
		text="Download my CV"
	></LinkButton>
</section>

<style lang="scss">
	@import '$styles/globals';

	.o-glance {
		@include text-sans-serif('M');
		display: grid;
		grid-template-areas: 
			"table    table      table"
			".        download   .    ";
		grid-row-gap: 12px;
		padding: 12px 6vw;
		margin: 0 auto;
		border: 2px solid $clr-highlight-500;

		&__table {
			grid-area: table;
			@include text-size('M');
			width: 100%;
			background: transparent;
			border-spacing: 0;
			border-collapse: collapse;

			tr {
				display: grid;
				grid-template-columns: 1fr 2fr;
				grid-column-gap: 24px;
				align-content: center;
				height: 32px;

				> td:first-child {
					display: flex;
					justify-content: flex-end;
					font-weight: bold;
					text-transform: uppercase;
				}
			}
		}
	}

	:global(.o-glance__download) {
		grid-area: download;
	}

	@include size-small {
		.o-glance {
			max-width: initial;
			margin: 0 12px;
		}
	}

	@include size-medium {
		.o-glance {
			padding: 12px 6vw;
			margin: 0 12vw;
		}
	}

	@include size-large {
		.o-glance {
			padding: 12px 12vw;
		}
	}
</style>
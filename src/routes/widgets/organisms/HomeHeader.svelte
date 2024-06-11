<script lang="ts">
</script>

<header class="o-homeHeader">
	<div class="o-homeHeader__container">
		<div class="o-homeHeader__headshot"></div>
		<div class="o-homeHeader__intro">
			<p>Hello there!</p>
			<p>My name is <em>Quinten Lansu</em></p>
			<p>and I build <em>user interfaces</em></p>
		</div>
	</div>
</header>

<style lang="scss">
	@import '$styles/globals';

	.o-homeHeader {
		display: flex;
		justify-content: center;
		align-items: center;
		background: get-shade($clr-highlight, 500);
		color: white;
		min-height: 240px;
    	padding: 12px;

		&__container {
			display: grid;
			grid-template-columns: 1fr 4fr;
			grid-template-areas: 
				"face  intro       ";
			grid-column-gap: 24px;
			align-items: center;
		}

		&__headshot {
			grid-area: face;
			display: table;
			width: 120px;
			height: 120px;
			background: url('/media/images/profile.jpg') center/contain no-repeat;
			border: 4px solid white;
			border-radius: 50%;
			margin: 5px;
		}

		&__intro {
			grid-area: intro;

			p {
				@include text-sans-serif('XL');
				color: white;
				line-height: initial;
			}

			em {
				font-weight: bold;
				font-style: normal;
			}
		}
	}

	@include size-small {
		.o-homeHeader {
			&__container {
				grid-template-columns: 1fr;
				grid-template-rows: 1fr min-content;
				grid-template-areas: 
					"face         "
					"intro        ";
				grid-row-gap: 12px;
				justify-items: center;
				padding: 12px;
			}

			&__intro {
				p {
					@include text-sans-serif('L');
				}
			}
		}
	}

	@include size-medium {
		.o-homeHeader {
			&__container {
				grid-template-columns: 1fr 2fr;
			}

			&__intro {
				p {
					@include text-sans-serif('L');
				}
			}
		}
	}
</style>
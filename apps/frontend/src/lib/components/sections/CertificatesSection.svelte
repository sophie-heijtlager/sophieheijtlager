<script lang="ts">
	const { section } = $props();
</script>

<section class="container">
	<div class="section-certificates section-xl" style="padding-block-end: 0;">
		<div class="section-certificates__heading">
			<div class="h3">{section.title}</div>
			<div class="paragraph">{section.paragraph}</div>
		</div>

		<div class="section-certificates__cards">
			{#each section.certificate_items as certificate, index (index)}
				<div class="card">
          <div class="card-index">{index < 10 ? '0' + (index + 1) : (index + 1)}</div>
					<div class="card-wrapper">
						<div class="card-certificate">{certificate.certificate}</div>
            <div class="card-institution">{certificate.institution}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style scoped>
	.section-certificates {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);

		.section-certificates__heading {
			display: flex;
			justify-content: space-between;
			gap: var(--space-md);
			flex-wrap: wrap;

      & .h3 {
        max-width: 768px;
      }

      & .paragraph {
        max-width: 500px;
      }
		}

		& .section-certificates__cards {
			display: flex;
      overflow-x: auto;
			gap: var(--space-sm);

			& .card {
				display: flex;
				flex-direction: column;
				gap: var(--space-2xl);
				flex: 1;
				justify-content: space-between;

				background-color: var(--beige-500);
        border: 0.5px solid var(--dark-grey-50);
        box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
				color: var(--primary-900);
				padding: var(--space-sm);
				border-radius: var(--space-2xs);

				min-width: 300px;

        & .card-index {
          font-size: var(--text-body-sm);
        }

				& .card-wrapper {
					display: flex;
					flex-direction: column;
					gap: var(--space-2xs);

					& .card-certificate {
            font-weight: 500;
					}

					& .card-institution {
            font-weight: 300;
					}
				}
			}

			@media (min-width: 768px) {
        overflow-x: unset;
				display: flex;
        flex-wrap: wrap;
			}
		}
	}
</style>

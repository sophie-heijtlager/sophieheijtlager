<script lang="ts">
	import Label from '../ui/Label.svelte';

	const { data } = $props();
</script>

<section class="section-about section-md" data-scheme="primary-dark">
	{#if data.images}
		<div class="section-about__images">
			{#each data.images as image, index (index)}
				<div class="image image-{index}">
					<img src={image.imageUrl} alt="images about me" />
				</div>
			{/each}
		</div>
	{/if}

	<div class="section-about__text">
		<div class="text-heading">
			{#if data.labels}
				<div class="text-heading__labels">
					{#each data.labels as label, index (index)}
						<Label {...label} />
					{/each}
				</div>
			{/if}

			<h3>{data.title}</h3>
		</div>

		{#if data.descriptions}
			<div class="text-description">
				{#each data.descriptions as description, index (index)}
					<div>{description}</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style lang="scss">
	.section-about {
		padding: var(--space-md);

		display: flex;
		align-items: center;
		flex-direction: column;
		gap: var(--space-lg);

		border-radius: var(--space-xs);

		.section-about__images {
			display: flex;

			& img {
				width: 100%;
				object-fit: cover;
				aspect-ratio: 4/3;
				border-radius: var(--space-2xs);
			}

			& .image-0 {
				rotate: -1deg;
			}

			& .image-1 {
				rotate: 2deg;
				margin-inline-start: -1rem;

				@media (min-width: 768px) {
					margin-inline-start: -4rem;
				}

				@media (min-width: 992px) {
					margin-inline-start: 0;
					margin-block-start: -9rem;
				}
			}

			@media (min-width: 992px) {
				flex-direction: column;
				flex: 1;
			}
		}

		.section-about__text {
			flex: 1;

			display: flex;
			flex-direction: column;
			gap: var(--space-md);

			& .text-heading {
				display: flex;
				flex-direction: column;
				gap: var(--space-sm);

				& .text-heading__labels {
					display: flex;
					gap: var(--space-2xs);
          flex-wrap: wrap;
				}
			}

      & .text-description {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
      }
		}

		@media (min-width: 992px) {
			flex-direction: row;
			padding: var(--space-xl);
			gap: var(--space-2xl);
		}

		@media (min-width: 1400px) {
			padding: var(--space-2xl);
			gap: var(--space-3xl);
		}
	}
</style>

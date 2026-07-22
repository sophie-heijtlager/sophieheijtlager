<script lang="ts">
	import Label from '../ui/Label.svelte';
	const { section } = $props();

	let label = $state();

	if (section.label) {
		label = section.label;
	}
</script>

<section class="container section-hero">
	{#if label}
		<Label {...label} />
	{/if}

	<div class="section-hero__grid">
		{#each section.titles as title, index (index)}
			<div class="grid-item h1" data-index={index}>{title}</div>
		{/each}

    {#each section.images as image, index(index)}
      <img class="grid-image" src={image.imageUrl + '?w=1400&fit=max'} alt="images of me" />
    {/each}
	</div>

</section>

<style scoped>
	.section-hero {
		height: 50dvh;
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		align-items: center;

		& .section-hero__grid {
      position: relative;

			& > .grid-item {
				font-size: clamp(3rem, -0.1339rem + 10.9388vw, 10.3125rem);
				line-height: 75%;

				@media (min-width: 992px) {
					&:global([data-index='0']) {
						grid-row: 1 / span 1;
						grid-column: 3 / span 9;
						justify-self: stretch;
					}

					&:global([data-index='1']) {
						align-self: MIN;
						grid-row: 2 / span 1;
						grid-column: 1 / span 10;
						justify-self: stretch;

            position: relative;
            z-index: -1;
					}

					&:global([data-index='2']) {
						grid-row: 3 / span 1;
						grid-column: 2 / span 11;
						justify-self: stretch;
					}

					&:global([data-index='3']) {
						grid-row: 4 / span 1;
						grid-column: 3 / span 9;
						justify-self: MAX;
					}
				}
			}

      & .grid-image {
        position: absolute;
        
        height: clamp(7.8125rem, 5.8036rem + 10.9388vw, 13.5rem);
        object-fit: cover;
        aspect-ratio: 3/4;

        border-radius: var(--space-2xs);
        border: 1px solid var(--dark-grey-500);
  
        &:first-of-type {
          left: 1rem;
          bottom: 0.5rem;
          transform: rotate(-4deg);
          z-index: -1;
        }
  
        &:last-of-type {
          right: 3rem;
          transform: rotate(4deg);
        }
  
      }

			@media (min-width: 992px) {
				display: grid;
				grid-template-rows: repeat(4, fit-content(100%));
				grid-template-columns: repeat(12, minmax(0, 1fr));
			}
		}



		@media (min-width: 992px) {
			height: 95dvh;
			gap: var(--space-lg);
			justify-content: center;
		}
	}
</style>

<script lang="ts">
	import Label from '../ui/Label.svelte';
	const { section } = $props();

	let label = $state();

	if (section.label) {
		label = section.label;
	}
</script>

<section class="container">
  <div class="section-hero section-sm">
    {#if label}
      <Label {...label} />
    {/if}

    <div class="grid-wrapper">
      <div class="section-hero__grid">
        {#each section.titles as title, index (index)}
          <div class="grid-item h1" data-index={index}>{title}</div>
        {/each}
      </div>
  
      <div class="grid-images">
        {#each section.images as image, index (index)}
          <img
            class="grid-images__image"
            src={image.imageUrl + '?w=1400&fit=max'}
            alt="images of me"
          />
        {/each}
      </div>
    </div>
  </div>
</section>

<style scoped>
	.section-hero {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		align-items: center;

		&:global( .label) {
			@media (max-width: 991px) {
				display: none;
			}
		}

		& .grid-wrapper {
			position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

			& .section-hero__grid {
				& > .grid-item {
					font-size: clamp(3.5rem, -0.1339rem + 10.9388vw, 10.3125rem);
					line-height: 75%;

					@media (min-width: 992px) {
						&:global([data-index='0']) {
							grid-row: 1 / span 1;
							grid-column: 3 / span 9;
							justify-self: stretch;
              position: relative;
              z-index: 2;
						}

						&:global([data-index='1']) {
							grid-row: 2 / span 1;
							grid-column: 1 / span 10;
							justify-self: stretch;

							position: relative;
							z-index: -1;
              text-align: center;
						}

						&:global([data-index='2']) {
							grid-row: 3 / span 1;
							grid-column: 2 / span 11;
							justify-self: stretch;
              text-align: center;
						}

						&:global([data-index='3']) {
							grid-row: 4 / span 1;
							grid-column: 3 / span 9;
              text-align: end;
						}
					}
				}

				@media (min-width: 992px) {
					display: grid;
					grid-template-rows: repeat(4, fit-content(100%));
					grid-template-columns: repeat(12, minmax(0, 1fr));
				}
			}

			& .grid-images {
				display: flex;

				& .grid-images__image {
					height: clamp(7.8125rem, 5.8036rem + 10.9388vw, 13.5rem);
          flex: 1;
					object-fit: cover;
					aspect-ratio: 3/4;

					border-radius: var(--space-2xs);
          animation: wobble 7s linear infinite;

					&:first-of-type {
						transform: rotate(-2deg);
					}

					&:last-of-type {
						transform: rotate(2deg);
					}

					@media (min-width: 992px) {
            height: 48%;
						position: absolute;

            &:first-of-type {
              left: 3rem;
              bottom: 2rem;
              z-index: -1;
					  }

            &:last-of-type {
              right: 3.5rem;
              top: 0;
            }
					}
				}

        @media (max-width: 991px) {
          justify-content: center;
          order: -1;
        }
			}
		}

		@media (min-width: 992px) {
			height: 95dvh;
			gap: var(--space-md);
			justify-content: center;
			padding: 0;
		}
	}

  @keyframes wobble {
    33% {
      transform: translateY(2%);
      transform: rotate(2deg);
    }
    66% {
      transform: rotate(-2deg);
      transform: translateY(-2%);
    }
  }
</style>

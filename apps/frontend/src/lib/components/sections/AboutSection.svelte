<script lang="ts">
	import { onMount } from 'svelte';
	import Label from '../ui/Label.svelte';
	import { gsap } from '$lib/utils/gsap';

	const { section } = $props();

	onMount(() => {
		const images = document.querySelectorAll('.section-about .image');
		const mm = gsap.matchMedia();

		mm.add('(min-width: 992px)', () => {
			images.forEach((image, i) => {
				gsap.to(image, {
					y: -25 + i * -25,
					ease: 'none',
					scrollTrigger: {
						trigger: image,
						start: 'top center',
						end: 'bottom top',
						scrub: 1 + i * 0.25
					}
				});
			});
		});
	});
</script>

<section class="container section-xl" style="padding-block-end: 0;" data-section="about-me">
	<div class="section-about section-md" data-scheme="primary-light">
		{#if section.images}
			<div class="section-about__images">
				{#each section.images as image, index (index)}
					<div class="image image-{index}">
						<img src={image.imageUrl + '?w=1400&fit=max'} alt="images about me" />
					</div>
				{/each}
			</div>
		{/if}

		<div class="section-about__text">
			<div class="text-heading">
				{#if section.labels}
					<div class="text-heading__labels">
						{#each section.labels as label, index (index)}
							<Label {...label} />
						{/each}
					</div>
				{/if}

				<h3>{section.title}</h3>
			</div>

			{#if section.descriptions}
				<div class="text-description">
					{#each section.descriptions as description, index (index)}
						<div>{description}</div>
					{/each}
				</div>
			{/if}
		</div>
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

				@media (min-width: 1200px) {
					width: 80%;
				}

				@media (min-width: 1500px) {
					width: 100%;
				}
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
					margin-block-start: -5.5rem;
				}
			}

			@media (min-width: 992px) {
				margin-block-start: 25px;
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

<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Tooltip from '../ui/Tooltip.svelte';

	const { section } = $props();
	console.log(section.marquees);

	onMount(() => {
		const sectionMarquee = document.querySelectorAll('.section-marquee');

		sectionMarquee.forEach((marquee, index) => {
			const inners = marquee?.querySelectorAll('.section-marquee__inner');

			const marqueeAnimation = gsap.to(inners, {
				xPercent: index === 0 ? 100 : -100,
				duration: 70 + index * 60,
				ease: 'none',
				repeat: 1
			});

			marquee?.addEventListener('mouseleave', () => marqueeAnimation.play());
			marquee?.addEventListener('mouseenter', () => marqueeAnimation.pause());
		});
	});
</script>

<section>
	{#each section.marquees as marquee, index (index)}
		<div
			class="section-marquee {marquee.color_scheme} container {marquee.change_position? 'top' : ''}"
			style="--marquee-rotation:{marquee.rotation}deg"
		>
			<div class="section-marquee__inner">
				{#each marquee.items as item, index (index)}
					<div class="section-marquee__inner__item">
						<div class="h6">{item.title}</div>
						{#if item.show_info}
							<div class="info-wrapper">
								<button type="button" class="info-trigger" aria-describedby="tooltip-{index}" aria-label="More info for:{item.title}">
									<i class="icon-info" aria-hidden="true"></i>
								</button>
									
								<Tooltip props={item.level} />
							</div>
						{/if}
					</div>

					{#if marquee.color_scheme === 'light'}
						<div class="section-marquee__inner__dot"></div>
					{/if}
				{/each}
			</div>

			<div class="section-marquee__inner" aria-hidden="true">
				{#each marquee.items as item, index (index)}
					<div class="section-marquee__inner__item">
						<div class="h6">{item.title}</div>
						{#if item.show_info}
							<div class="info-wrapper">
								<button type="button" class="info-trigger" tabindex="-1"  aria-label="More info for: {item.title}">
									<i class="icon-info" aria-hidden="true"></i>
								</button>
								<Tooltip props={item.level} />
							</div>
						{/if}
					</div>

					{#if marquee.color_scheme === 'light'}
						<div class="section-marquee__inner__dot"></div>
					{/if}
				{/each}
			</div>
		</div>
	{/each}
</section>

<style lang="scss" scoped>
	.section-marquee {
		padding-block: var(--space-md);
		display: flex;
		white-space: nowrap;
		position: relative;
		transform: rotate(var(--marquee-rotation));

		&.dark {
			justify-content: end;
			z-index: 2;
		}

		&.top {
			top: -1rem;
		}

		:global(&::before, &::after) {
			position: absolute;
			content: '';
			top: 0;
			height: 100%;
			width: 100%;
			z-index: -1;
			background-color: inherit;
		}

		& .section-marquee__inner {
			display: flex;
			align-items: center;
			justify-content: center;

			& .section-marquee__inner__item {
				display: flex;
				gap: var(--space-2xs);
				padding-inline: var(--space-xl);

				& .info-wrapper {
					position: relative;

					& .info-trigger {
						color: inherit;
						display: flex;

						&:hover {
							:global(~ .tooltip) {
								opacity: 1;	
							}
						}
					}
				}
			}

			& .section-marquee__inner__dot {
				height: 0.5rem;
				width: 0.5rem;
				background-color: var(--primary-500);
				border-radius: var(--space-2xs);
			}
		}

		:global(&::before) {
			left: -199px;
			border-block: 0.5px solid var(--dark-grey-100);
		}

		:global(&::after) {
			right: -199px;
			border-block: 0.5px solid var(--dark-grey-100);
		}

		:global(&.light) {
			background-color: var(--beige-500);
			color: var(--dark-grey-500);
		}

		:global(&.dark) {
			--color-text-headings: var(--beige-500);
			color: var(--beige-500);
			background-color: var(--dark-grey-500);
		}
	}
</style>

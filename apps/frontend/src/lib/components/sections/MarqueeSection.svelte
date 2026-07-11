<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Tooltip from '../ui/Tooltip.svelte';

	const { section } = $props();

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

		const tooltips = document.querySelectorAll('.tooltip');

		if(tooltips) {
			tooltips.forEach(tooltip => {
				const infoWrapper = tooltip.closest('.info-wrapper');
				const infoIcon = infoWrapper?.querySelector('.icon-info');
	
				infoIcon?.addEventListener('mouseenter', () => tooltip.classList.add('visible'));
				infoIcon?.addEventListener('mouseleave', () => tooltip.classList.remove('visible'));
			})
		}
	});
</script>

<section class="section-md">
	{#each section.marquees as marquee, index (index)}
		<div
			class="section-marquee {marquee.color_scheme} container"
			style="--marquee-rotation:{marquee.rotation}deg"
		>
			<div class="section-marquee__inner">
				{#each marquee.items as item, index (index)}
					<div class="section-marquee__inner__item">
						<h6>{item.title}</h6>
						{#if item.show_info}
							<div class="info-wrapper">
								<i class="icon-info" aria-hidden="true"></i>
								<Tooltip props={item.level} />
							</div>
						{/if}
					</div>

					{#if marquee.color_scheme === 'light'}
						<div class="section-marquee__inner__dot"></div>
					{/if}
				{/each}
			</div>

			<div class="section-marquee__inner">
				{#each marquee.items as item, index (index)}
					<div class="section-marquee__inner__item">
						<h6>{item.title}</h6>
						{#if item.show_info}
							<div class="info-wrapper">
								<i class="icon-info" aria-hidden="true"></i>
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

		&:first-of-type {
			justify-content: end;
			z-index: 2;
		}

		&:last-of-type {
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
					display: flex;
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
			left: -4px;
		}

		:global(&::after) {
			right: -4px;
		}

		:global(&.light) {
			background-color: var(--beige-500);
			color: var(--dark-grey-500);
			border-block: 0.5px solid var(--dark-grey-100);
		}

		:global(&.dark) {
			--color-text-headings: var(--beige-500);
			color: var(--beige-500);
			background-color: var(--dark-grey-500);
		}
	}
</style>

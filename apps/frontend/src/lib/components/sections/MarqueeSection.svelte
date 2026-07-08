<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	const { section } = $props();

	onMount(() => {
		console.log(section);

    const sectionMarquee = document.querySelectorAll('.section-marquee');

    sectionMarquee.forEach((marquee, index) => {
      const inners = marquee?.querySelectorAll('.section-marquee__inner');

      console.log(index);

      const marqueeAnimation = gsap.to(inners, {
        xPercent: -100,
        duration: 40 + (index * 30) ,
        ease: 'none',
        repeat: 1,
      })
  
      marquee?.addEventListener('mouseleave', () => marqueeAnimation.play());
      marquee?.addEventListener('mouseenter', () => marqueeAnimation.pause());
    })

	});
</script>

<section class="section-md">
  {#each section.marquees as marquee, index (index)}
    <div class="section-marquee {marquee.color_scheme} container" style="--marquee-rotation:{marquee.rotation}deg">
      <div class="section-marquee__inner">
        {#each marquee.items as item, index (index)}
          <div class="section-marquee__inner__item">
            <h6>{item.title}</h6>
            {#if item.show_info}
              <i class="icon-info" aria-hidden="true"></i>
            {/if}
          </div>
        {/each}
      </div>

      <div class="section-marquee__inner">
        {#each marquee.items as item, index (index)}
          <div class="section-marquee__inner__item">
            <h6>{item.title}</h6>
            {#if item.show_info}
              <i class="icon-info" aria-hidden="true"></i>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>

<style lang="scss">
	.section-marquee {
		padding-block: var(--space-md);
    display: flex;
		white-space: nowrap;
    position: relative;
    transform: rotate(var(--marquee-rotation));

    &:is(:last-of-type) {
      z-index: -1;
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
			justify-content: center;

			& .section-marquee__inner__item {
				display: flex;
				gap: var(--space-2xs);
        padding-inline-end: var(--space-3xl);
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

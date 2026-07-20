<script lang="ts">
  import TimelineCard from '../ui/TimelineCard.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Label from '../ui/Label.svelte';

	const { section } = $props();

	onMount(() => {
		const timelineWrapper = document.querySelector('.timeline-wrapper');
		const mm = gsap.matchMedia();

		if (!timelineWrapper) return;

		// function getScrollAmount() {
		//   let timelineWidth = timelineWrapper?.scrollWidth;

		//   if (!timelineWidth) return;

		//   return -(timelineWidth / window.innerWidth) * 100;
		// }

		// console.log(getScrollAmount());

		mm.add('(min-width: 768px)', () => {
			gsap.to(timelineWrapper, {
				xPercent: -100,
				ease: 'none',
				scrollTrigger: {
					trigger: '.section-my-career',
					start: 'top -22%',
					pin: true,
					scrub: 1,
					invalidateOnRefresh: true,
					markers: true
				}
			});
		});
	});
</script>

<section class="section-my-career section-lg" data-scheme="primary-light">
	<div class="container my-career">
		<div class="my-career__heading">
			<h3>{section.title}</h3>
			<p>{section.paragraph}</p>
		</div>

		<div class="timeline-wrapper">
			<div class="timeline-wrapper__lines">
        {#each {length: 60}, i}
				  <div class="line"></div>
        {/each}
			</div>
			<div class="timeline-wrapper__cards">
        {#each section.timelineCards as content, index (index)}
          <TimelineCard {content}></TimelineCard>
        {/each}
			</div>
		</div>
	</div>
</section>

<style scoped>
	.section-my-career {
		@media (min-width: 768px) {
			height: calc(100dvh);
		}
	}

	.my-career {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);

		& .my-career__heading {
			display: flex;
			justify-content: space-between;
			gap: var(--space-md);
			flex-wrap: wrap;

			& p {
				max-width: 500px;
			}
		}

		& .timeline-wrapper {
      position: relative;
			display: flex;
			flex-direction: column;

			@media (min-width: 768px) {
				position: relative;
			}

			& .timeline-wrapper__lines {
				display: flex;
				flex-direction: column;
				gap: var(--space-3xl);

				@media (min-width: 768px) {
          flex-direction: unset;
				}

				& .line {
					width: 100%;
					border-block-start: 1px dashed var(--pink-200);

					@media (min-width: 768px) and (max-width: 999px) {
						width: 1px;
						height: calc(100dvh - 20dvh);
						border: 0;
						border-inline-start: 1px dashed var(--pink-200);
					}

					@media (min-width: 1000px) {
						width: 1px;
						height: calc(100dvh - 10dvh);
						border: 0;
						border-inline-start: 1px dashed var(--pink-200);
					}
				}
			}

			& .timeline-wrapper__cards {
				position: absolute;
				top: 50%;
        left: 2rem;
        transform: translateY(-50%);
				width: 100%;

        display: flex;
        gap: 10rem;

        @media (max-width: 767px) {
          transform: unset;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          gap: var(--space-md);
          flex-direction: column;

        }
			}
		}
	}
</style>

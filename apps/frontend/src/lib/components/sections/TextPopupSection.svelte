<script>
  import { gsap } from '$lib/utils/gsap';
	import { onMount } from 'svelte';
  import Label from "../ui/Label.svelte";

	const { section } = $props();

  onMount(() => {
    const labels = document.querySelectorAll('.popup-label');
		const mm = gsap.matchMedia();


    labels?.forEach((label, i) => {
      gsap.set(label, {
        scale: 0, 
        opacity: 0,
        x: gsap.utils.random(-16, 16),
        y: gsap.utils.random(-4, 4),
        rotation: gsap.utils.random(-4, 4)
      });

      mm.add('(min-width: 576px)', () => {
        gsap.set(label, {
          x: gsap.utils.random(-24, 24),
          y: gsap.utils.random(-16, 16),
        });
      });

      gsap.to(label, {
        scale: 1,
        opacity: 1,
        ease: 'back.out(2.5)',
        duration: 0.4,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: label,
          start: `top+=${i * 150} bottom`,
          end: `bottom+=${i * 150} top`,
          toggleActions: 'play reverse play reverse',
        }
      });
    });
  });
</script>

<section class="container">
	<div class="section-text-popup section-2xl">
    {#each section.titles as title, index(index)}
		  <h1>{title}</h1>
    {/each}

    <div class="section-text-popup__labels">
      {#each section.labels as label, index(index)}
        <div class="popup-label"><Label {...label}/></div>
      {/each}
    </div>
	</div>
</section>

<style>
	.section-text-popup {
    position: relative;

    & .section-text-popup__labels {
      & .popup-label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

		& h1 {
			text-align: center;
			margin-inline: auto;
		}
	}
</style>

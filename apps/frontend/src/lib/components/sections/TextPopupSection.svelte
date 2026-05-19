<script>
  import { gsap } from '$lib/utils/gsap';
	import { onMount } from 'svelte';
  import Label from "../ui/Label.svelte";
	const { section } = $props();

  onMount(() => {
    const labels = document.querySelectorAll('.popup-label');

    labels?.forEach((label, i) => {
      gsap.to(label, {
        scale: 1 + (i * 0.25),  
        scrollTrigger: {
          trigger: label,
          start: 'top center',
          end: 'bottom top',
          scrub: 1 + (i * 0.25),
          markers: true
        }
      })
    })
  })
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

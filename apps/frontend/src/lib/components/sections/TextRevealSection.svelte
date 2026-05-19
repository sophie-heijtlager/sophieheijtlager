<script lang="ts">
	import { onMount } from 'svelte';
	import { SplitText } from '$lib/utils/gsap.js';
	import { gsap } from '$lib/utils/gsap';

	const { section } = $props();

	onMount(() => {
		const textToReveal = document.querySelector('.section-text-reveal h4.alternate');

		const splitText = SplitText.create(textToReveal, { type: 'words' });

		gsap.from(splitText.words, {
      scrollTrigger: {
        trigger: '.section-text-reveal',
        start: 'top-=100 center',
        end: 'bottom-=100 center',
        scrub: true,
      },
      opacity: 0.2,
      stagger: 0.2,
		});
	});
</script>

<section class="container">
	<div class="section-text-reveal section-2xl" aria-label="{section.text}">
		<h4 class="alternate">{section.text}</h4>
	</div>
</section>

<style>
	.section-text-reveal {
		text-align: center;

		& h4 {
			margin-inline: auto;
			max-width: 950px;
		}
	}
</style>

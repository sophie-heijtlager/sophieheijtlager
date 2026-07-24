<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollSmoother } from '$lib/utils/gsap.js';
	import Sections from '$lib/components/layout/Sections.svelte';

	const { data } = $props();

	onMount(() => {
		const mm = gsap.matchMedia();

		mm.add('(min-width: 768px)', () => {
			ScrollSmoother.create({
				smooth: 1, 
				effects: true
			});
		});
	})
	
</script>

<Sections sections={data.homePage?.sections ?? []} />
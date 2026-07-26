<script>
	import { onMount } from 'svelte';
	import { ScrollSmoother } from '$lib/utils/gsap.js';
	import Sections from '$lib/components/layout/Sections.svelte';

	const { data } = $props();

	onMount(() => {
		function createScrollSmoother() {
			ScrollSmoother.create({
				smooth: 1, 
				effects: true
			});
		}

		createScrollSmoother();

		document.addEventListener('resize', () => {
			if (window.innerWidth < 768) {
				createScrollSmoother();
			}
		})
	})
	
</script>

<Sections sections={data.homePage?.sections ?? []} />
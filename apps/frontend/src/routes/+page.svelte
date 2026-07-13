<script>
	import { onMount } from 'svelte';

	import { ScrollSmoother } from '$lib/utils/gsap.js';
	import Sections from '$lib/components/layout/Sections.svelte';

	const { data } = $props();

	onMount(() => {
		ScrollSmoother.create({
		smooth: 1, 
		effects: true, 
		smoothTouch: 0.75 
	});
	})
	
</script>

<h1 style="height: 400px">Home pagina</h1>

<Sections sections={data.homePage?.sections ?? []} />
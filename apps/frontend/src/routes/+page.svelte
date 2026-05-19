<script>
	import { onMount } from 'svelte';

	import { ScrollSmoother } from '$lib/utils/gsap.js';
	import Sections from '$lib/components/layout/Sections.svelte'

	const { data } = $props();

	onMount(() => {
		ScrollSmoother.create({
		smooth: 1, 
		effects: true, 
		smoothTouch: 0.75 
	});
	})
	
</script>

<div class="container">
	<h1 style="height: 1000px">Home pagina</h1>

	<Sections sections={data.homePage?.sections ?? []} />
	<div style="height: 500px"></div>
</div>

<!-- <section class="section-about-me section-sm" data-scheme="primary-light">
	<div class="container">
		<h2>about</h2>
		<div>about me section</div>
	</div>
</section> -->

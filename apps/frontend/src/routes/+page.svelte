<script>
	import { onMount } from 'svelte';
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import Label from '$lib/components/ui/Label.svelte';

	const { data } = $props();
	const { homePage, projects } = $derived(data);

	import { ScrollSmoother } from '$lib/utils/gsap.js';

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

	{#each homePage.sections as section (section._key)}
		{#if section._type === 'about' }
			<AboutSection data={section}/>
		{/if}
	{/each}

	{#if projects}
		<h2>Projecten</h2>
		<ul style="height: 1200px">
			{#each projects as project (project._id)}
				<li>{project.title}</li>

				{#each project.labels as label (label._key)}
					<Label {...label} />
				{/each}
			{/each}
		</ul>
	{/if}

</div>

<!-- <section class="section-about-me section-sm" data-scheme="primary-light">
	<div class="container">
		<h2>about</h2>
		<div>about me section</div>
	</div>
</section> -->

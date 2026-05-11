<script>
	import AboutSection from '$lib/components/sections/AboutSection.svelte';

	const { data } = $props();
	const { homePage, projects } = $derived(data);

  console.log(homePage)
</script>

<div class="container">
	<h1>Home pagina</h1>

	{#each homePage.sections as section (section._key)}
		{#if section._type === 'about' }
			<AboutSection data={section}/>
		{/if}
	{/each}

	<!-- {#if projects}
		<h2>Projecten</h2>
		<ul>
			{#each projects as project (project._id)}
				<li>{project.title}</li>

				{#each project.labels as label (label._key)}
					<Label {...label} />
				{/each}
			{/each}
		</ul>
	{/if} -->

</div>

<!-- <section class="section-about-me section-sm" data-scheme="primary-light">
	<div class="container">
		<h2>about</h2>
		<div>about me section</div>
	</div>
</section> -->

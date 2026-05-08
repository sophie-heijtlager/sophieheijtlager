<script>
	const { data } = $props();

	const { projects } = $derived(data);
</script>

<div class="container">
	<h1>Home pagina</h1>

	{#if projects}
		<h2>Projecten</h2>
		<ul>
			{#each projects as project (project._id)}
				<li>{project.title}</li>
			{/each}
		</ul>
	{/if}

	<section class="section-about-me" data-scheme="primary-light">
		<h2>about</h2>
		<div>about me section</div>
	</section>

	<section class="section-careers" data-scheme="tertiary-dark">
		<h1>career</h1>
		<div>career section</div>
	</section>
</div>

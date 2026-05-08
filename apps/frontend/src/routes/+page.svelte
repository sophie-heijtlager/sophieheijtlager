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

	<section class="section-careers section-md" data-scheme="primary-dark">
		<h1>career</h1>
		<div>career section</div>
	</section>
</div>

<section class="section-about-me section-sm" data-scheme="primary-light">
	<div class="container">
		<h2>about</h2>
		<div>about me section</div>
	</div>
</section>

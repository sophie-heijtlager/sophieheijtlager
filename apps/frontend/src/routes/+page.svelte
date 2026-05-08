<script>
	import Label from "$lib/components/ui/Label.svelte";

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
        
        {#each project.labels as label (label._key)}
          <Label {...label} />
        {/each}
			{/each}
		</ul>
	{/if}

  <div class="labels section-sm" style="display: flex; flex-wrap: wrap; gap: 8px;">
    <Label icon="draw" text="where code meets creativity" color="secondary" border={true} />
    <Label text="webdesign" icon="draw"/>
    <Label text="development" color="secondary" icon="code_blocks"/>
    <Label icon="info" text="Label" color="tertiary"/>
    <Label text="education" border={true}/>
    <Label text="work" color="secondary" border={true}/>
  </div>

	<section class="section-careers section-md" data-scheme="primary-dark">
		<h1>career</h1>
		<div>career section</div>
    <i class="icon-info"></i>
	</section>
</div>

<section class="section-about-me section-sm" data-scheme="primary-light">
	<div class="container">
		<h2>about</h2>
		<div>about me section</div>
	</div>
</section>

<script>
  const { data } = $props();

  const { projects } = $derived(data);
</script>

<h1>Home pagina</h1>

{#if projects}
  <h2>Projecten</h2>
  <ul>
    {#each projects as project (project._id)}
      <li>{project.title}</li>
    {/each}
  </ul>
{/if}


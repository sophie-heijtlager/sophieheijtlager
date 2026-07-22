
<script lang="ts">
  import Label from "./Label.svelte";
  const { content } = $props();
</script>

<div class="timeline-card">
  {#if content.image }
	  <img class="timeline-card__image" src={content.image.imageUrl + '?w=1200&fit=max'} alt="Displaying: {content.heading}" />
  {/if}

  {#if content.labels}
    {#each content.labels as label, index (index)}
      <Label {...label} />
    {/each}
  {/if}

  <div class="h5">{content.years}</div>

  <div class="timeline-card__content">
    <div class="content-heading">{content.heading}</div>
    <p class="content-description">{content.description}</p>
  </div>
  
</div>

<style scoped>
  .timeline-card {
    flex: 1; 
    
    padding-inline: var(--space-lg);
    padding-block: var(--space-md);
    
    background-color: var(--beige-500);
    border-radius: var(--space-2xs);
    
    display: flex;
    gap: var(--space-sm);
    flex-direction: column;
    
    @media (min-width: 767px) {
      max-width: 475px;
      min-width: 475px;
    }

    & .timeline-card__image {
      height: 140px;
      border-radius: var(--space-2xs);
      object-fit: cover;
      object-position: center;
    }

    & .timeline-card__content {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);

      & .content__heading {
        font-weight: 500;
      }
  
      & .content__description {
        font-weight: 300;
      }
    }
    
  }
</style>

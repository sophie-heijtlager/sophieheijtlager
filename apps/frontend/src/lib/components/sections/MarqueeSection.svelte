<script lang="ts">
	const { section } = $props();

  console.log(section);
</script>

<section class="section-md">
  <div class="section-marquee {section.color_scheme}">
    <div class="container section-marquee__inner">
      {#each section.items as item (item._key)}
        <div class="section-marquee__inner__item">
          <h6>{item.title}</h6>
          {#if item.show_info}
            <i class="icon-info" aria-hidden="true"></i>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  .section-marquee {
    padding-block: var(--space-md);
    transform: rotate(2deg);

    :global(&::before, &::after) {
      position: absolute;
      content: '';
      top: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      background-color: inherit;
    }

    & .section-marquee__inner__item {
      display: flex;
      gap: var(--space-2xs);
    }

    :global(&::before) {
      left: -4px;
    }

    :global(&::after) {
      right: -4px;
    }

    :global(&.light) {
      background-color: var(--beige-500);
      color: var(--dark-grey-500);
    }

    :global(&.dark) {
      background-color: var(--dark-grey-500);
      color: var(--beige-500);
    }
  }
</style>
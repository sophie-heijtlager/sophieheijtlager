<script lang="ts">
	const { section } = $props();
</script>

<section class="section-md">
  <div class="section-marquee {section.color_scheme}">
    <div class="container section-marquee__inner">
      {#each section.items as item, index (index)}
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

    white-space: nowrap;

    :global(&::before, &::after) {
      position: absolute;
      content: '';
      top: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      background-color: inherit;
    }

    & .section-marquee__inner {
      display: flex;
      justify-content: center;
      gap: var(--space-3xl);

      & .section-marquee__inner__item {
        display: flex;
        gap: var(--space-2xs);
      }
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
      border-block: 0.5px solid var(--dark-grey-100);
    }

    :global(&.dark) {
      --color-text-headings: var(--beige-500);
      color: var(--beige-500);
      background-color: var(--dark-grey-500);
    }
  }
</style>
<script lang="ts">
  const { props } = $props()

  console.log(props);
</script>

<div class="tooltip">{props}</div>

<style lang="scss">
  .tooltip {
    position: absolute;
    top: calc(-100% - 3rem);
    left: 50%;
    transform: translateX(-50%);

    color: var(--dark-grey-500);
    background-color: var(--beige-500);

    padding-inline: var(--space-md);
    padding-block: var(--space-sm);
    border-radius: var(--space-2xs);

    border: 0.5px solid var(--dark-grey-100);
  }
</style>
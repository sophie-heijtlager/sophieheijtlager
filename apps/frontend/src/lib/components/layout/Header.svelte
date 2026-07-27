<script lang="ts">
	import { urlFor } from "$lib/cms/image";
  
  const { data }= $props();

</script>

<header>
  <div class="container header-inner">
    <a href="/" aria-label="Go to sophieheijtlager.com" class="header-logo">
      <img src={urlFor(data.logo.asset._ref).width(100).url()} alt="Sophie Heijtlager logo"/>
    </a>

    {#if data.link_text}
    <a aria-label="E-mail to sophieheijtlager@gmail.com" class="header-text-link" href="mailto:sophieheijtlager@gmail.com">
      <span>
        {data.link_text}
      </span>
    </a>
    {/if }
  </div>
</header>

<style lang="scss" scoped>
  header {
    border-block-end: 1px solid var(--dark-grey-50);
    background-color: rgba(254, 252, 251, 0.9);
    backdrop-filter: blur(8px);

    padding-block: var(--space-sm);
    z-index: 999;

    .header-inner {
      display: flex;
      gap: var(--space-sm);
      justify-content: space-between;

      & > a {
        display: flex;
      }

      & .header-text-link {
        padding-block: var(--space-xs);
        border-radius: var(--space-2xs);
        padding-inline: var(--space-md);
        border: 0.5px solid var(--dark-grey-500);
        transition: opacity 0.2s ease-out;

        & > span {
          display: flex;
          align-items: center;
          gap: var(--space-2xs);
          color: var(--dark-grey-500);
        }

        &:hover, :active {
          opacity: 0.6;
          transition: opacity 0.2s ease-out;
        }
      }

  
      .header-logo img {
        max-width: 200px;
        
        @media (min-width: 992px) {
          max-width: 250px;
        }
      }
    }
  }

</style>
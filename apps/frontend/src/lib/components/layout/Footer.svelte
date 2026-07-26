<script lang="ts">
	import { urlFor } from "$lib/cms/image";

  const { data } = $props();
  console.log(data);
</script>

<footer>
	<div class="container">
		<div class="footer-inner">
			<div class="footer-inner__contact">
				<div class="contact-heading">
          <span class="h4">{data.contact_title} &#x1f44b;&#x1f3fc;</span>
        </div>

				<div class="contact-fields">
					<a aria-label="Email to sophieheijtlager@gmail.com" href="mailto:sophieheijtlager@gmail.com" class="contact-fields__field">{data.contact_text}</a>
          {#if data.social_icons}
            {#each data.social_icons as icon, index (index)}
              <a href="#" target="_blank" class="contact-fields__field"><i class="icon-{icon}"></i></a>
            {/each}
          {/if }
        </div>
			</div>

			<div class="footer-inner__links">
        {#each data.menu_items as item, index (index)}
          <div class="link">
            <span>{item}</span>
          </div>
        {/each}

			</div> 

			<img src={urlFor(data.logo.asset._ref).width(300).url()} alt="Sophie Heijtlager logo" class="footer-inner__title" />
		</div>
	</div>
</footer>

<style scoped>
	footer {
    position: relative;
    --color-text-headings: var(--beige-500);

		background-color: var(--dark-grey-500);
		padding-block-start: var(--section-sm);
		padding-block-end: var(--section-xl);

		& .footer-inner {
			display: flex;
			flex-direction: column;
			gap: var(--space-lg);

      & .footer-inner__contact {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);

        & .contact-heading {
          display: flex;
          max-width: 350px;
        }

        & .contact-fields {
          display: flex;
          align-items: center;
          gap: var(--space-xs);

          & .contact-fields__field {
            padding: var(--space-sm);
            background-color: var(--dark-grey-400);
            color: var(--dark-grey-200);
            border-radius: var(--space-2xs);
            display: flex;
            line-height: 100%;
          }
        }

        @media (min-width: 992px) {
          gap: var(--space-md);
        }
      }

      & .footer-inner__links {
        display: flex;
        gap: var(--space-sm);
        flex-direction: column;

        & > .link {
          justify-self: end;
        }

        @media (min-width: 992px) {
          flex-direction: row;
          gap: var(--space-2xl);
        }
      }

      & .footer-inner__title {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        color: var(--beige-500);
      }

      @media (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
      }
		}

	}
</style>

<script lang="ts">
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
					<div class="field">{data.contact_text}</div>
					<a aria-label="Email to sophieheijtlager@gmail.com" href="mailto:sophieheijtlager@gmail.com" class="field"><i class="icon-arrow_outward"></i></a>
				</div>
			</div>

			<div class="footer-inner__links">
        {#each data.menu_items as item, index (index)}
          <div class:link={item === 'Contact'}>
            <span>{item}</span>

            {#if item === 'Contact'}
            <div class="link-socials">
              <div class="link-socials__icon"><i class="icon-mail"></i></div>
              <div class="link-socials__icon"><i class="icon-linkedin"></i></div>
            </div>
            {/if }
          </div>
        {/each}

			</div>

			<img src="{data.logo._upload.file.name}" alt="" class="footer-inner__title" />
		</div>
	</div>
</footer>

<style scoped>
	footer {
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

          & .field {
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
        flex-direction: column;
        gap: var(--space-sm);

        & .link {
          display: flex;
          flex-direction: column;
          gap: var(--space-2xs);

          & .link-socials {
            display: flex;
            gap: var(--space-xs);

            & .link-socials__icon {
              display: flex;

              padding: var(--space-sm);
              background-color: var(--dark-grey-400);
              border-radius: var(--space-2xs);
              color: var(--beige-500);

              font-size: 1.25rem;
            }
          }
          
          @media (min-width: 992px) {
            gap: var(--space-sm);
          }
        }

        @media (min-width: 992px) {
          flex-direction: row;
          gap: var(--space-2xl);
        }
      }

      & .footer-inner__title {
        position: absolute;
        color: var(--beige-500);
      }

      @media (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
      }
		}

	}
</style>

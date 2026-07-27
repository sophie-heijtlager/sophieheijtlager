<script lang="ts">
  import { urlFor } from "$lib/cms/image";
	const { section } = $props();

	console.log(section.certificate_items);
</script>

<section class="container">
	<div class="section-certificates section-xl" style="padding-block-end: 0;">
    
    <h4>{section.title}</h4>
    
		<div class="section-certificates__cards">
			{#each section.certificate_items as certificate, index (index)}
        <div class="card">
          <div class="card-wrapper">
          <img loading="lazy" src={urlFor(certificate.image.asset._ref).width(800).url()} alt="Image for: {certificate.institution}" class="card-image" />
            <div class="card-date">{certificate.date}</div>
					  <div class="card-certificate h6">{certificate.certificate}</div>
          </div>
					<div class="card-institution">{certificate.institution}</div>
				</div>
			{/each}

      <div class="card more-soon">
        <div class="h6">more coming soon!</div>
      </div>
		</div>
	</div>
</section>

<style scoped>
	.section-certificates {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

		& .section-certificates__cards {
			display: flex;
			flex-direction: column;
			gap: var(--space-xs);
      
      flex-wrap: wrap;
      
			& .card {
        display: flex;
				flex-direction: column;
				gap: var(--space-sm);
				flex: 1;
        
        justify-content: space-between;
        
				background-color: var(--primary-50);
        color: var(--primary-900);
				padding: var(--space-sm);
				border-radius: var(--space-xs);
        
        min-width: 300px;

        &.more-soon {
          text-align: center;
        }
        
        & .card-wrapper {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);

          & .card-image {
            height: 140px;
            border-radius: var(--space-2xs);
            object-fit: cover;
          }

          & .card-date {
            font-size: var(--text-body-sm);
            opacity: 0.5;
          }

          & .card-certificate {
            color: inherit;
          }
        }
        

			}
      
			@media (min-width: 768px) {
				flex-direction: row;
			}
		}
	}
</style>

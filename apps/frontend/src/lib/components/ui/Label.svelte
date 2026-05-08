<script lang="ts">
  interface LabelProps {
    text: string, 
    icon?: string | null,
    border?: boolean,
    color?: string
  }

	let { text, icon = null, border = false, color = 'primary' }: LabelProps = $props();
</script>

<div aria-label="label: {text}" class="label label--{color}" class:has-icon={icon} class:has-border={border}>
	{#if icon}
		<i class="icon-{icon}" aria-hidden="true"></i>
	{/if}
	{text}
</div>  

<style lang="scss">
	.label {  
    user-select: none; 
   
		display: flex;
		gap: var(--space-xs);
		align-items: center;
		width: fit-content;
    
		text-transform: uppercase;
		font-family: var(--font-heading);
    font-size: var(--text-body-sm);
    
		font-weight: 500;
    line-height: var(--leading-sm);
    
		padding-block: 0.375rem;
		padding-inline: var(--space-sm);
		border-radius: var(--space-3xs);

    --label-bg: var(--primary-50);
    --label-color: var(--primary-800);
    --label-border-color: var(--primary-800);

		background-color: var(--label-bg);
		color: var(--label-color);

    &.has-icon {
      padding-inline-start: 0.75rem;
    }

    &.has-border {
      border: 0.5px solid var(--label-border-color);
    }

		&.label--secondary {
			--label-bg: var(--secondary-50);
			--label-color: var(--secondary-600);
			--label-border-color: var(--secondary-600);
		}

		&.label--tertiary {
			--label-bg: var(--tertiary-50);
			--label-color: var(--tertiary-500);
			--label-border-color: var(--tertiary-500);
		}
	}
</style>

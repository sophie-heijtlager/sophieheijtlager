<script lang="ts">
	const { props } = $props();
</script>

<div class="tooltip">
	<span class="tooltip__inner">{props}</span>
</div>

<style lang="scss" scoped>
	.tooltip {
		opacity: 0;
		transition: opacity 0.1s ease-out;

		:global(&.visible) {
			opacity: 1;
			transition: opacity 0.1s ease-out;
		}

		position: absolute;
		top: calc(-100% - 5rem);
		left: 50%;
		transform: translateX(-50%);
    
		color: var(--dark-grey-500);
		border: 0.5px solid var(--dark-grey-100);
		padding-inline: var(--space-md);
		padding-block: var(--space-sm);
		border-radius: var(--space-2xs);
		background-color: var(--beige-500);

		width: fit-content;
    
    & .tooltip__inner {
			position: relative;

			&::after {
				content: '';
				position: absolute;
				left: 50%;
				bottom: -1.6rem;
				transform: translateX(-50%) rotate(45deg);
				width: 0.75rem;
				height: 0.75rem;
				z-index: 2;

				background-color: var(--beige-500);
				border-inline-end: 0.5px solid var(--dark-grey-100);
				border-block-end: 0.5px solid var(--dark-grey-100);
			}
    }
	}
</style>

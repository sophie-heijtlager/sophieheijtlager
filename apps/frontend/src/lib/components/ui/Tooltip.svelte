<script lang="ts">
	const { props } = $props();
</script>

<div class="tooltip">
	<span class="tooltip__inner">
		{#if props === 'level_01'}
			<div class="tooltip__stars" aria-hidden="true">
				<i class="icon-star-filled"></i>
				<i class="icon-star-outlined"></i>
				<i class="icon-star-outlined"></i>
			</div>
			<div class="tooltip__text" aria-label="Tooltip information: Still learning">Still learning</div>
		{:else if props === 'level_02'}
			<div class="tooltip__stars" aria-hidden="true">
				<i class="icon-star-filled"></i>
				<i class="icon-star-filled"></i>
				<i class="icon-star-outlined"></i>
			</div>
			<div class="tooltip__text" aria-label="Tooltip information: Expanding skillset">Expanding skillset</div>
		{:else}
			<div class="tooltip__stars" aria-hidden="true">
				<i class="icon-star-filled"></i>
				<i class="icon-star-filled"></i>
				<i class="icon-star-filled"></i>
			</div>
			<div class="tooltip__text" aria-label="Tooltip information: Confident!">Confident!</div>
		{/if}
	</span>
</div>

<style lang="scss" scoped>
	.tooltip {
		opacity: 0;
		transition: opacity 0.1s ease-out;

		position: absolute;
		top: calc(-100% - 3rem);
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
			display: flex;
			align-items: center;
			gap: var(--space-xs);

			& .tooltip__text {
				font-size: var(--text-body-sm);
			}

			& .tooltip__stars {
				display: flex;
				font-size: var(--text-body-lg);
			}

			&::after {
				content: '';
				position: absolute;
				left: 50%;
				bottom: -1.42rem;
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

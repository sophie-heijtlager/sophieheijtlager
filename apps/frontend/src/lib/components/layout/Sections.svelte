<script lang="ts">
	import type { Component } from "svelte";
	import AboutSection from "../sections/AboutSection.svelte";
	import MarqueeSection from "../sections/MarqueeSection.svelte";
	import TextRevealSection from "../sections/TextRevealSection.svelte";
	import TextPopupSection from "../sections/TextPopupSection.svelte";

  const { sections = [] } = $props();

  const components: Record<string, Component<any>> = {
    about: AboutSection,
		marqueeSection: MarqueeSection,
		textReveal: TextRevealSection,
		textPopup: TextPopupSection,
  }
</script>

{#each sections as section (section._key)}
	{@const SectionComponent = components[section._type]}

	{#if SectionComponent}
		<SectionComponent {section} />
	{:else if import.meta.env.DEV}
		<div style="padding:1rem;background:#fee;color:#900;font-family:monospace">
			Unknown section type: <strong>{section._type}</strong>
		</div>
	{/if}
{/each}
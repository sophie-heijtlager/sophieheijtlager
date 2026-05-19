<script lang="ts">
	import type { Component } from "svelte";
	import AboutSection from "../sections/AboutSection.svelte";

  const { sections = [] } = $props();

  const components: Record<string, Component<any>> = {
    about: AboutSection
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
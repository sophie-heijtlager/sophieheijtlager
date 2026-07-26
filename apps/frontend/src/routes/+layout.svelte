<script lang="ts">
	import '$lib/styles/global.css';

	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header data={data.header}/>
	{@render children()}
<Footer data={data.footer}/>

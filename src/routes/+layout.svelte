<script lang="ts">
	import FloatingShare from '$lib/FloatingShare.svelte';
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}


<FloatingShare />
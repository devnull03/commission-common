<script lang="ts">
	import { page } from '$app/state';

	import Facebook from '$lib/icons/facebook.svelte';
	import Instagram from '$lib/icons/Instagram.svelte';
	import Twitter from '$lib/icons/x.svelte';
	import Whatsapp from '$lib/icons/whatsapp.svelte';
	import Telegram from '$lib/icons/telegram.svelte';

	import { Copy } from '@lucide/svelte';
	import { onMount } from 'svelte';

	interface Props {
		mobile?: boolean;
	}

	let { mobile = false }: Props = $props();

	let currentUrl = $derived(page.url.toString());
	let title = $state(
		'Professional Exterior Cleaning Services | Transform Your Property Today! ✨🏠'
	);

	function copyToClipboard() {
		navigator.clipboard.writeText(currentUrl);
		alert('Link copied to clipboard!');
	}

	onMount(() => {
		title = `${document.title} | Transform Your Property Today! ✨🏠`;
	});
</script>

<div class="floating-share" class:mobile>
	<a
		href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
		target="_blank"
		rel="noopener noreferrer"
		title="Share on Facebook"
		class="share-button"
	>
		<Facebook class="h-5 w-5" />
	</a>

	<a
		href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`}
		target="_blank"
		rel="noopener noreferrer"
		class="share-button"
		title="Share on Twitter"
	>
		<Twitter class="h-5 w-5" />
	</a>

	<a
		href={`https://www.instagram.com/`}
		target="_blank"
		rel="noopener noreferrer"
		class="share-button"
		title="Share on Instagram"
	>
		<Instagram class="h-5 w-5" />
	</a>

	<a
		href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + currentUrl)}`}
		target="_blank"
		rel="noopener noreferrer"
		class="share-button"
		title="Share on WhatsApp"
	>
		<Whatsapp class="h-5 w-5" />
	</a>

	<a
		href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`}
		target="_blank"
		rel="noopener noreferrer"
		class="share-button"
		title="Share on Telegram"
	>
		<Telegram class="h-5 w-5" />
	</a>

	<button
		onclick={copyToClipboard}
		class="share-button"
		title="Copy Link"
	>
		<Copy class="h-5 w-5" />
	</button>
</div>

<style>
	.floating-share {
		position: fixed;
		left: 1rem;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		z-index: 50;
		background-color: rgba(255, 255, 255, 0.8);
		padding: 0.5rem;
		border-radius: 0.5rem;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
	}

	.share-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		padding: 0.5rem;
		border: none;
		background: transparent;
		border-radius: 0.375rem;
		color: #374151;
		transition: all 0.2s ease-in-out;
		text-decoration: none;
		cursor: pointer;
	}

	.share-button:hover {
		background-color: rgba(156, 163, 175, 0.1);
		color: #111827;
	}

	.share-button:focus {
		outline: 2px solid #3b82f6;
		outline-offset: 2px;
	}

	.floating-share.mobile {
		flex-direction: row;
		bottom: 1rem;
		left: 50%;
		top: auto;
		transform: translateX(-50%);
	}

	/* Media query for smaller screens */
	@media (max-width: 768px) {
		.floating-share {
			left: 0.5rem;
			padding: 0.35rem;
			scale: 0.9;
		}

		.floating-share.mobile {
			/* left: 50%; */
			left: 6rem;
		}
	}

	/* Hide on very small screens or make it more compact */
	@media (max-width: 480px) {
		.floating-share {
			scale: 0.8;
		}
	}
</style>

export { default as X } from './x.svelte';
export { default as WhatsApp } from './whatsapp.svelte';
export { default as Telegram } from './telegram.svelte';
export { default as PhoneCall } from './PhoneCall.svelte';
export { default as Instagram } from './Instagram.svelte';
export { default as Facebook } from './facebook.svelte';

// Export common icon props type for consistency
export interface IconProps {
  color?: string;
  class?: string;
}

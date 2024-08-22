import { defineConfig } from 'vite';

import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from '@unocss/svelte-scoped/vite';

export default defineConfig({
	plugins: [UnoCSS(), sveltekit()]
});

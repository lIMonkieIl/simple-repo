import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import config from './src/config';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	server: {
		port: config.port,
		strictPort: true
	}
});

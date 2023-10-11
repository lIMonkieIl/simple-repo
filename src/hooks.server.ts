// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import config from './config';
export const handle: Handle = async ({ event, resolve }) => {
	const theme = config.theme;
	event.cookies.set('theme', theme);
	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
	});
};

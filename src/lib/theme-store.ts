// place files you want to import through the `$lib` alias in this folder.
import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const storeTheme = writable(
	browser ? document.body.getAttribute('data-theme') ?? '' : 'skeleton'
);

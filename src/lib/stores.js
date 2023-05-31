// main.js (entry point of your Svelte app)
import { writable } from 'svelte/store';

// Create a writable store to hold the user ID
export const loggedInUserId = writable(null);
export const rememberChecked = writable(false);
        
declare module '*.svelte' {
	import { type SvelteComponentDev } from 'svelte/internal';
	const component: typeof SvelteComponentDev;
	export default component;
}

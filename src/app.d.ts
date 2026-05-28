/// <reference types="@sveltejs/enhanced-img" />

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

declare module "*.svx" {
	import type { Component } from "svelte";
	import type { RawBlogMetadata } from "$lib/types";

	export const metadata: RawBlogMetadata;
	const component: Component;
	export default component;
}

declare module "*.md" {
	import type { Component } from "svelte";
	import type { RawBlogMetadata } from "$lib/types";

	export const metadata: RawBlogMetadata;
	const component: Component;
	export default component;
}

declare module "*?enhanced" {
	import type { Picture } from "vite-imagetools";

	const value: Picture;
	export default value;
}

declare module "virtual:blog-raw" {
	const value: Record<string, string>;
	export default value;
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

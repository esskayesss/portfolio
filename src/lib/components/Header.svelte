<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import Nav from './Nav.svelte';
</script>

<header
	class="sticky top-0 z-10 mx-auto flex w-full max-w-6xl items-center justify-between bg-bg py-4 pt-8 shadow-shell print:static print:shadow-none"
>
	<a class="flex items-center gap-2 font-proto text-xl no-underline" href={resolve('/')} aria-label="esskayesss home">
		<img class="size-4 opacity-90" src={asset('/logo.webp')} alt="" width="14" height="14" />
		<h1>esskayesss</h1>
	</a>

	<Nav />
</header>

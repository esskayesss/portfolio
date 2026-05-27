<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import Nav from './Nav.svelte';
</script>

<header
	class="shadow-shell sticky top-0 z-10 mx-auto flex w-full max-w-6xl flex-col gap-3 bg-bg py-4 pt-8 print:static print:shadow-none sm:flex-row sm:items-center sm:justify-between sm:gap-4"
>
	<a class="flex items-center gap-2 no-underline" href={resolve('/')} aria-label="esskayesss home">
		<img class="size-4 opacity-90" src={asset('/logo.webp')} alt="" width="14" height="14" />
		<span class="font-headings text-xl leading-tight text-accent-fg capitalize">esskayesss</span>
	</a>

	<div class="flex flex-wrap items-center gap-x-4 gap-y-2">
		<Nav />
		<div class="flex items-center gap-3 text-sm" aria-label="Quick links">
			<a class="btn btn-muted" href={asset('/resume.pdf')}>resume</a>
		</div>
	</div>
</header>

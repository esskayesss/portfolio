<script lang="ts">
	import india from '$lib/assets/india.webp?enhanced';
	import Icon from '@iconify/svelte';
</script>

<footer class="flex flex-col gap-2 text-sm text-dim-fg print:hidden py-5">
	<div class="mx-auto mt-8 flex w-full max-w-6xl justify-center text-xs text-dim-fg lg:justify-between">
		<a
			class="hidden items-center gap-2 text-dim-fg no-underline hover:text-accent-fg hover:underline lg:flex"
			href="https://x.com/esskayesss_"
			rel="external noreferrer"
			target="_blank"
		>
			<Icon icon="ph:x-logo" aria-hidden="true" />
			@esskayesss_
		</a>
		<span class="flex items-center gap-3">
			character permutations, assembled in
			<span class="flex items-center gap-2 pl-1">
				<enhanced:img class="size-8 w-auto" src={india} alt="gm sars." />
				भारत
			</span>
		</span>
	</div>
</footer>

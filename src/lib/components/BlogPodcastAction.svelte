<script lang="ts">
	import { playPodcast } from '$lib/podcast/player.svelte';

	type Props = {
		slug: string;
		title: string;
	};

	let { slug, title }: Props = $props();
</script>

<button
	type="button"
	class="inline-flex w-fit items-center gap-2 border border-cyan-fg bg-cyan-bg px-4 py-1 text-cyan-fg hover:bg-dim-bg hover:text-accent-fg"
	onclick={() => playPodcast({ slug, title })}
	aria-label={`Listen to ${title}`}
>
	<svg class="size-5" viewBox="0 0 24 24" aria-hidden="true">
		<path fill="currentColor" d="M3 10h2v4H3zm4-4h2v12H7zm4 3h2v6h-2zm4-5h2v16h-2zm4 7h2v2h-2z" />
	</svg>
	<span>listen</span>
</button>

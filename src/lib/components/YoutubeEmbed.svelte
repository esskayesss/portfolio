<script lang="ts">
	type Props = {
		id: string;
		title?: string;
	};

	let { id, title = 'YouTube video player' }: Props = $props();

	const src = $derived(
		`https://www.youtube.com/embed/${id}?color=white&mute=1&showinfo=0&modestbranding=1&origin=${encodeURIComponent('https://esskayesss.dev')}`
	);
</script>

<div class="youtube-embed">
	<iframe
		src={src}
		{title}
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	></iframe>
</div>

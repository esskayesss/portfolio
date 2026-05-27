<script lang="ts">
	import { onMount, tick } from 'svelte';
	import {
		closePodcast,
		podcastPlayer,
		seekPodcast,
		tickPodcast,
		togglePodcastPlayback,
	} from '$lib/podcast/player.svelte';

	const RESOLUTION_MS = 100;
	const MIN_RECTANGLES = 10;
	const MAX_RECTANGLES = 100;
	const RECTANGLE_STEP = 12;

	let progressElement = $state<HTMLDivElement>();
	let titleContainerElement = $state<HTMLDivElement>();
	let titleElement = $state<HTMLDivElement>();
	let rectangleCount = $state(60);
	let shouldMarquee = $state(false);
	let rectangleIndices = $derived(Array.from(Array(rectangleCount).keys()));
	let filledRectangles = $derived(
		Math.floor((podcastPlayer.elapsed / podcastPlayer.total) * rectangleCount),
	);

	function toClock(time: number) {
		const zeroPad = (value: number) => String(value).padStart(2, '0');
		const hours = Math.floor(time / 3600);
		const minutes = Math.floor((time % 3600) / 60);
		const seconds = Math.floor(time % 60);

		if (hours > 0) return `${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(seconds)}`;
		return `${zeroPad(minutes)}:${zeroPad(seconds)}`;
	}

	function updateMeasurements() {
		if (progressElement) {
			const calculated = Math.floor(progressElement.offsetWidth / RECTANGLE_STEP);
			rectangleCount = Math.max(MIN_RECTANGLES, Math.min(MAX_RECTANGLES, calculated));
		}

		if (titleContainerElement && titleElement) {
			shouldMarquee = titleContainerElement.clientWidth < titleElement.clientWidth;
		}
	}

	function seekTo(index: number) {
		seekPodcast((index / rectangleCount) * podcastPlayer.total);
	}

	onMount(() => {
		updateMeasurements();
		window.addEventListener('resize', updateMeasurements);

		return () => window.removeEventListener('resize', updateMeasurements);
	});

	$effect(() => {
		if (!podcastPlayer.isPlaying) return;

		const interval = window.setInterval(() => {
			tickPodcast(RESOLUTION_MS / 1000);
		}, RESOLUTION_MS);

		return () => window.clearInterval(interval);
	});

	$effect(() => {
		if (podcastPlayer.title) {
			tick().then(updateMeasurements);
		}
	});
</script>

{#if podcastPlayer.display}
	<aside class="fixed bottom-0 left-0 z-50 w-screen border-t border-ghost bg-bg print:hidden" aria-label="Podcast player">
		<div class="relative mx-auto flex w-full max-w-6xl flex-col gap-2 p-6">
			<button
				type="button"
				class="absolute right-0 bottom-full border-x border-t border-ghost bg-bg px-4 py-1 text-sm text-fg hover:bg-dim-bg hover:text-accent-fg"
				onclick={closePodcast}
			>
				close x
			</button>

			<div class="flex w-full justify-between gap-2" bind:this={progressElement} aria-label="Playback progress">
				{#each rectangleIndices as index (index)}
					<button
						type="button"
						class:bg-green-fg={index <= filledRectangles}
						class:animate-pulse={index === filledRectangles}
						class="podcast-progress-block cursor-pointer border border-green-fg bg-transparent p-0 hover:bg-green-bg"
						aria-label={`Seek to ${toClock((index / rectangleCount) * podcastPlayer.total)}`}
						onclick={() => seekTo(index)}
					></button>
				{/each}
			</div>

			<div class="flex w-full flex-col-reverse items-center justify-between gap-3 md:flex-row md:gap-8">
				<div class="flex w-full flex-row-reverse items-center justify-between gap-2 whitespace-nowrap md:flex-row md:justify-start">
					<button
						type="button"
						class="flex items-center gap-2 border border-fg bg-bg px-3 py-1 text-fg hover:bg-dim-bg hover:text-accent-fg"
						onclick={togglePodcastPlayback}
					>
						<span>{podcastPlayer.isPlaying ? 'pause' : 'play'}</span>
						{#if podcastPlayer.isPlaying}
							<svg class="size-5" viewBox="0 0 24 24" aria-hidden="true">
								<path fill="currentColor" d="M7 5h4v14H7zm6 0h4v14h-4z" />
							</svg>
						{:else}
							<svg class="size-5" viewBox="0 0 24 24" aria-hidden="true">
								<path fill="currentColor" d="M8 5v14l11-7z" />
							</svg>
						{/if}
					</button>
					<span>{toClock(podcastPlayer.elapsed)} / {toClock(podcastPlayer.total)}</span>
				</div>

				<div class="w-full min-w-fit overflow-hidden md:w-fit md:text-right" bind:this={titleContainerElement}>
					<div
						class:podcast-title-marquee={shouldMarquee}
						class="relative w-full whitespace-nowrap md:w-fit"
						bind:this={titleElement}
					>
						<span class="block w-full md:w-fit">{podcastPlayer.title}</span>
						<span class="podcast-title-copy absolute whitespace-nowrap">
							<span>{podcastPlayer.title}</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	</aside>
{/if}

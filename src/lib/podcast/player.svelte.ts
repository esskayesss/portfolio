type PodcastTrack = {
	slug: string;
	title: string;
};

const TOTAL_SECONDS = 340;

export const podcastPlayer = $state({
	slug: "",
	title: "empty",
	display: false,
	elapsed: 0,
	total: TOTAL_SECONDS,
	isPlaying: false,
});

export function playPodcast(track: PodcastTrack) {
	podcastPlayer.slug = track.slug;
	podcastPlayer.title = track.title || track.slug;
	podcastPlayer.elapsed = 0;
	podcastPlayer.display = true;
}

export function closePodcast() {
	podcastPlayer.display = false;
	podcastPlayer.isPlaying = false;
}

export function togglePodcastPlayback() {
	podcastPlayer.isPlaying = !podcastPlayer.isPlaying;
}

export function seekPodcast(time: number) {
	podcastPlayer.elapsed = Math.max(0, Math.min(podcastPlayer.total, time));
}

export function tickPodcast(deltaSeconds: number) {
	const nextTime = podcastPlayer.elapsed + deltaSeconds;
	podcastPlayer.elapsed = nextTime >= podcastPlayer.total ? 0 : nextTime;
}

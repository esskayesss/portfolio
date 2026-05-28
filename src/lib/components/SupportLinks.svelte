<script lang="ts">
	import Icon from '@iconify/svelte';

	const githubSponsorsUrl = 'https://github.com/sponsors/esskayesss';
	const xSubscribeUrl = 'https://x.com/i/subscriptions/subscribe/esskayesss_';
</script>

<div class="flex flex-wrap gap-3">
	<a class="btn" href={githubSponsorsUrl} target="_blank" rel="external noreferrer">
		<Icon icon="ph:github-logo" class="size-6" aria-hidden="true" />
		<span>Sponsor on GitHub</span>
	</a>
	<a class="btn btn-muted" href={xSubscribeUrl} target="_blank" rel="external noreferrer">
		<Icon icon="ph:x-logo" class="size-6" aria-hidden="true" />
		<span>Subscribe on X</span>
	</a>
</div>

<script lang="ts">
	import { asset } from '$app/paths';
	import Icon from '@iconify/svelte';
</script>

<div
	class="flex flex-col gap-6 border border-green-50 bg-green-10 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
>
	<div class="flex items-center gap-2 sm:gap-4">
		<img
			class="size-12 rounded-full"
			src={asset('/headshot.webp')}
			alt="Saurabh Sharma"
			width="48"
			height="48"
		/>
		<div class="flex flex-col items-start">
			<span class="text-xs text-subtext">saurabh sharma.</span>
			<span class="text-green-100">esskayesss@ybl</span>
		</div>
	</div>

	<button
		type="button"
		class="inline-flex w-fit items-center gap-2 text-xs text-green-100 hover:text-fg"
		aria-label="Generate UPI QR"
	>
		<Icon icon="ph:qr-code" class="text-xl" aria-hidden="true" />
		<span class="whitespace-nowrap">Generate QR</span>
	</button>
</div>

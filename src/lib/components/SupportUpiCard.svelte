<script lang="ts">
	import { asset } from '$app/paths';
</script>

<div
	class="flex flex-col gap-6 border border-ghost bg-dim-bg p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
>
	<div class="flex items-center gap-6 sm:gap-8">
		<img
			class="size-12 rounded-full"
			src={asset('/headshot.webp')}
			alt="Saurabh Sharma"
			width="48"
			height="48"
		/>
		<div class="flex flex-col items-start">
			<span class="text-xs text-subtext">saurabh sharma.</span>
			<span class="text-accent-fg">esskayesss@ybl</span>
		</div>
	</div>

	<div class="flex max-w-sm flex-col gap-1 text-sm text-subtext">
		<span class="text-xs uppercase tracking-wide text-accent-fg">UPI</span>
		<p>Use the UPI ID above in your payment app. QR generation is not implemented here.</p>
	</div>
</div>

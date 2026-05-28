<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	type EnhancedModule = { default: Picture };

	type Props = {
		src: string;
		alt: string;
		caption?: string;
		sizes?: string;
	};

	let { src, alt, caption, sizes }: Props = $props();

	const modules = import.meta.glob<EnhancedModule>(
		'/src/lib/assets/blog/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}',
		{ eager: true, query: { enhanced: true } }
	);

	const picture = $derived(modules[`/src/lib/assets/blog/${src}`]?.default);
</script>

{#if picture}
	<figure>
		<enhanced:img src={picture} {alt} {sizes} />
		{#if caption}
			<figcaption><span>Caption:</span> {caption}</figcaption>
		{/if}
	</figure>
{:else}
	<figure>
		<p class="text-red-90">Missing blog image: {src}</p>
	</figure>
{/if}

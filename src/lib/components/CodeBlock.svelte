<script lang="ts">
	import Icon from '@iconify/svelte';

	let {
		code,
		lang,
		filename
	}: {
		code: string;
		lang: string;
		filename: string;
	} = $props();

	let copied = $state(false);

	const extension = $derived(filename.split('.').pop() ?? lang);

	async function copyCode() {
		await navigator.clipboard.writeText(code);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1500);
	}
</script>

<div class="code-block">
	<div class="code-block__bar">
		<div class="code-block__meta">
			<span class="code-block__lang">{extension}</span>
			<span class="code-block__filename">{filename}</span>
		</div>
		<button type="button" class="code-block__copy" onclick={copyCode} aria-label={`Copy ${filename} code`}>
			<Icon icon={copied ? 'ph:check-circle' : 'ph:copy'} aria-hidden="true" />
			{copied ? 'Copied' : 'Copy'}
		</button>
	</div>
	<pre class={`language-${lang}`}><code class={`language-${lang}`}>{code}</code></pre>
</div>

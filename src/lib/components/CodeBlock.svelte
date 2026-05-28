<script lang="ts">
	import Icon from '@iconify/svelte';

	type HighlightToken = {
		text: string;
		className: string;
	};

	type HighlightLine = {
		number: number;
		tokens: HighlightToken[];
	};

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
	const language = $derived(lang.replace(/^language-/, '') || 'plaintext');
	const highlightedLines = $derived(highlightCode(code, language));

	const jsKeywords = new Set([
		'const',
		'let',
		'var',
		'if',
		'else',
		'return',
		'for',
		'while',
		'function',
		'class',
		'new',
		'import',
		'from',
		'export',
		'async',
		'await'
	]);

	const pyKeywords = new Set(['from', 'import', 'def', 'return', 'if', 'else', 'for', 'while', 'class', 'in']);

	function highlightCode(source: string, sourceLanguage: string): HighlightLine[] {
		return source.replace(/\n$/, '').split('\n').map((line, index) => ({
			number: index + 1,
			tokens: tokenizeLine(line, sourceLanguage)
		}));
	}

	function tokenizeLine(line: string, sourceLanguage: string): HighlightToken[] {
		if (!line) return [];

		const commentIndex = sourceLanguage === 'python' ? line.indexOf('#') : line.indexOf('//');
		const beforeComment = commentIndex >= 0 ? line.slice(0, commentIndex) : line;
		const comment = commentIndex >= 0 ? line.slice(commentIndex) : '';
		const tokens = tokenizeCodePart(beforeComment, sourceLanguage);

		if (comment) tokens.push({ text: comment, className: 'hljs-comment' });
		return tokens;
	}

	function tokenizeCodePart(value: string, sourceLanguage: string): HighlightToken[] {
		const keywords = sourceLanguage === 'python' ? pyKeywords : jsKeywords;
		const tokens: HighlightToken[] = [];
		const pattern = /('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|\b\d+\b|\b[A-Za-z_$][\w$]*\b)/g;
		let cursor = 0;
		let match: RegExpExecArray | null;

		while ((match = pattern.exec(value))) {
			if (match.index > cursor) tokens.push({ text: value.slice(cursor, match.index), className: '' });

			const text = match[0];
			let className = '';
			if (text.startsWith('\'') || text.startsWith('"')) className = 'hljs-string';
			else if (/^\d+$/.test(text)) className = 'hljs-number';
			else if (keywords.has(text)) className = 'hljs-keyword';
			else if (/^[A-Z_]{2,}$/.test(text)) className = 'hljs-variable constant_';
			tokens.push({ text, className });
			cursor = match.index + text.length;
		}

		if (cursor < value.length) tokens.push({ text: value.slice(cursor), className: '' });
		return tokens;
	}

	async function copyCode() {
		try {
			await navigator.clipboard.writeText(code);
		} catch {
			const field = document.createElement('textarea');
			field.value = code;
			field.style.position = 'fixed';
			field.style.opacity = '0';
			document.body.appendChild(field);
			field.select();
			document.execCommand('copy');
			field.remove();
		}
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
		<button type="button" class="code-block__copy" onclick={copyCode} aria-label={`Copy ${filename} code`} title={copied ? 'Copied' : 'Copy'}>
			<Icon icon={copied ? 'ph:check-circle' : 'ph:copy'} aria-hidden="true" />
		</button>
	</div>
	<pre class={`language-${language}`}><code class={`language-${language} code-block__table`}>{#each highlightedLines as line (line.number)}<span class="code-block__line"><span class="code-block__line-number">{line.number}</span><span class="code-block__line-code">{#if line.tokens.length > 0}{#each line.tokens as token, tokenIndex (`${line.number}-${tokenIndex}`)}<span class={`${token.className} whitespace-pre`}>{token.text}</span>{/each}{:else}&nbsp;{/if}</span></span>{/each}</code></pre>
</div>

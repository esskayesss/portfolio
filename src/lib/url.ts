import type { ExternalHref } from "./types";

export function githubHref(repo: string): ExternalHref {
	return `https://github.com/${repo}`;
}

export function externalHost(href: string): string {
	try {
		return new URL(href).hostname;
	} catch {
		return href;
	}
}

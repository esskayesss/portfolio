import { blogPosts } from "$lib/blogs";
import { canonicalUrl } from "$lib/site";

import type { RequestHandler } from "@sveltejs/kit";

type SitemapEntry = {
	path: string;
	lastModified?: string;
};

const staticPaths = [
	"/",
	"/projects",
	"/support",
	"/blog",
	"/blog/archive",
	"/blog/search",
];

function escapeXml(value: string) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;");
}

function renderUrl({ path, lastModified }: SitemapEntry) {
	const lastModifiedTag = lastModified
		? `\n    <lastmod>${lastModified}</lastmod>`
		: "";

	return `  <url>\n    <loc>${escapeXml(canonicalUrl(path))}</loc>${lastModifiedTag}\n  </url>`;
}

export const GET: RequestHandler = () => {
	const entries: SitemapEntry[] = [
		...staticPaths.map((path) => ({ path })),
		...blogPosts.map((post) => ({
			path: `/blog/${post.slug}`,
			lastModified: post.sort_date,
		})),
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map(renderUrl).join("\n")}\n</urlset>\n`;

	return new Response(body, {
		headers: {
			"content-type": "application/xml; charset=utf-8",
		},
	});
};

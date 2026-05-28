import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { BlogMetadata, RawBlogMetadata } from "./types";

type FrontmatterValue = string | boolean | Array<string>;
type ParsedFrontmatter = Record<string, FrontmatterValue>;

const rawPaths = Object.keys(
	import.meta.glob("/src/content/blog/**/*.{svx,md}"),
);
const projectRoot = process.cwd();
const rawModules: Record<string, string> = Object.fromEntries(
	rawPaths.map((path) => [path, readFileSync(join(projectRoot, path), "utf8")]),
);
const coverModules = import.meta.glob<string>("/static/blog/**/cover.webp", {
	eager: true,
	query: "?url",
	import: "default",
});
function stripQuotes(value: string) {
	return value.replace(/^['"]|['"]$/g, "").trim();
}

function parseFrontmatterValue(value: string): FrontmatterValue {
	const trimmed = value.trim();

	if (trimmed === "true") return true;
	if (trimmed === "false") return false;
	if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
		return trimmed
			.slice(1, -1)
			.split(",")
			.map((item) => stripQuotes(item.trim()))
			.filter(Boolean);
	}

	return stripQuotes(trimmed);
}

function parseFrontmatter(source: string) {
	const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
	const body = match ? source.slice(match[0].length) : source;
	const data: ParsedFrontmatter = {};

	if (!match) return { data, body };

	for (const line of match[1].split("\n")) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith("#")) continue;

		const separator = trimmed.indexOf(":");
		if (separator === -1) continue;

		const key = trimmed.slice(0, separator).trim();
		const value = trimmed.slice(separator + 1).trim();
		data[key] = parseFrontmatterValue(value);
	}

	return { data, body };
}

function slugPartsFromPath(path: string) {
	const relativePath = path
		.replace(/^\/src\/content\/blog\//, "")
		.replace(/\.(svx|md)$/, "");
	const parts = relativePath.split("/");
	const filename = parts.at(-1) ?? relativePath;
	const collection =
		parts.length > 1 ? parts.slice(0, -1).join("/") : undefined;

	return { filename, collection };
}

function uniqueSlugs(
	entries: Array<{ path: string; data: ParsedFrontmatter }>,
) {
	const preferred = entries.map(({ path, data }) => {
		const { filename, collection } = slugPartsFromPath(path);
		const frontmatterSlug =
			typeof data.slug === "string" ? data.slug : undefined;
		return {
			path,
			collection,
			baseSlug: frontmatterSlug || filename,
		};
	});
	const counts = new Map<string, number>();

	for (const entry of preferred) {
		counts.set(entry.baseSlug, (counts.get(entry.baseSlug) ?? 0) + 1);
	}

	const seen = new Map<string, number>();
	return new Map(
		preferred.map((entry) => {
			let slug = entry.baseSlug;
			if ((counts.get(slug) ?? 0) > 1 && entry.collection) {
				slug = `${slug}-${entry.collection.replace(/\//g, "-")}`;
			}

			const collision = seen.get(slug) ?? 0;
			seen.set(slug, collision + 1);
			if (collision > 0) slug = `${slug}-${collision + 1}`;

			return [entry.path, slug];
		}),
	);
}

function wordsFromContent(source: string) {
	return source
		.replace(/```[\s\S]*?```/g, "")
		.replace(/[`*_#[\]()>|:-]/g, " ")
		.trim()
		.split(/\s+/)
		.filter(Boolean).length;
}

function readingTimeFromContent(
	metadata: Partial<RawBlogMetadata>,
	source: string,
): BlogMetadata["reading_time"] {
	if (metadata.reading_time) return metadata.reading_time;

	const words = wordsFromContent(source);
	return {
		words,
		minutes: Math.floor(words / 60),
	};
}

function sortableDate(rawDate: string | Date | undefined) {
	const date = rawDate ? new Date(rawDate) : new Date();
	if (Number.isNaN(date.getTime()))
		return new Date().toISOString().slice(0, 10);
	return date.toISOString().slice(0, 10);
}

function displayDate(rawDate: string) {
	return new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	}).format(new Date(`${rawDate}T00:00:00`));
}

function stringArray(value: FrontmatterValue | undefined) {
	return Array.isArray(value) ? value : [];
}

function stringValue(value: FrontmatterValue | undefined, fallback = "") {
	return typeof value === "string" ? value : fallback;
}

function coverFromMetadata(value: FrontmatterValue | undefined) {
	if (typeof value !== "string") return undefined;
	if (!value || value === "false" || value === "true") return undefined;
	return value.replace(/^\/static\//, "/");
}

function hasCoverFromMetadata(value: FrontmatterValue | undefined) {
	if (typeof value === "boolean") return value;
	if (typeof value === "string") return value.length > 0 && value !== "false";
	return false;
}

function coverFromAsset(slug: string) {
	return Object.keys(coverModules).some((path) =>
		path.endsWith(`/static/blog/${slug}/cover.webp`),
	);
}

function coverUrlFromAsset(slug: string) {
	return `/blog/${slug}/cover.webp`;
}

const parsedEntries = Object.entries(rawModules).map(([path, source]) => ({
	path,
	source,
	...parseFrontmatter(source),
}));
const slugsByPath = uniqueSlugs(parsedEntries);

const allPosts = parsedEntries
	.map(({ path, source, data, body }) => {
		const slug = slugsByPath.get(path) ?? slugPartsFromPath(path).filename;
		const { collection: pathCollection } = slugPartsFromPath(path);
		const sortDate = sortableDate(stringValue(data.date));
		const published =
			data.published === undefined ? true : data.published !== false;
		const coverUrl = coverFromMetadata(data.cover_image);
		const hasAssetCover = coverFromAsset(slug);
		const metadata: BlogMetadata = {
			title: stringValue(data.title, "Untitled"),
			description: stringValue(data.description),
			date: displayDate(sortDate),
			sort_date: sortDate,
			tags: stringArray(data.tags),
			type: stringValue(data.type, "article") as BlogMetadata["type"],
			collection:
				stringValue(data.collection, pathCollection ?? "") || pathCollection,
			published,
			cover_image: hasCoverFromMetadata(data.cover_image) || hasAssetCover,
			cover_url:
				coverUrl ?? (hasAssetCover ? coverUrlFromAsset(slug) : undefined),
			slug,
			source_path: path,
			prev_slug: undefined,
			next_slug: undefined,
			reading_time: readingTimeFromContent(data, body || source),
		};

		return metadata;
	})
	.sort(
		(left, right) => Date.parse(right.sort_date) - Date.parse(left.sort_date),
	);

const visiblePosts = import.meta.env.PROD
	? allPosts.filter((post) => post.published !== false)
	: allPosts;

export const blogPosts = visiblePosts.map((post, index, posts) => ({
	...post,
	prev_slug: posts[index + 1]?.slug,
	next_slug: posts[index - 1]?.slug,
}));
export const latestBlogPosts = blogPosts.slice(0, 3);

export function getBlogPost(slug: string) {
	return blogPosts.find((post) => post.slug === slug);
}

export function searchBlogPosts(query: string) {
	const normalizedQuery = query.trim().toLowerCase();
	if (!normalizedQuery) return blogPosts;

	return blogPosts.filter((post) => {
		const searchable = [post.title, post.description, post.type, ...post.tags]
			.join(" ")
			.toLowerCase();
		return searchable.includes(normalizedQuery);
	});
}

export const siteUrl = "https://esskayesss.dev";
export const siteName = "esskayesss.";
export const siteDescription = "saurabh sharma's personal website.";

export function canonicalUrl(path = "/") {
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;
	return new URL(normalizedPath, siteUrl).toString();
}

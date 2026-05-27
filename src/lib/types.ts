export type ExternalHref = `https://${string}` | `http://${string}`;

export interface BlogMetadata {
	title: string;
	description: string;
	slug: string;
	date: string;
	tags: Array<string>;
	type: "tutorial" | "project" | "article" | "diary";
	collection?: string | undefined;
	published?: boolean | undefined;
	cover_image?: string | undefined;
	prev_slug: string | undefined;
	next_slug: string | undefined;
	reading_time: {
		minutes: number;
		words: number;
	};
}

export interface BlogPost extends BlogMetadata {
	body: string;
}

export interface ProjectMetadata {
	title: string;
	description: string;
	blog?: string | undefined;
	website?: ExternalHref | undefined;
	github?: string | undefined;
}

export interface ExperienceMetadata {
	position: string;
	timeline: string;
	org: string;
	website?: ExternalHref | undefined;
	location: string;
	description?: string | undefined;
}

export interface CertificationMetadata {
	title: string;
	issuer: "Coursera" | "Kaggle" | "Contest";
	href?: ExternalHref | undefined;
	description: string;
	link?: {
		href: ExternalHref;
		label: string;
	};
	suffix?: string | undefined;
}

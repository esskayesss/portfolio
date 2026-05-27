export type ExternalHref = `https://${string}` | `http://${string}`;

export interface ReadingTime {
	minutes: number;
	words: number;
}

export interface RawBlogMetadata {
	title: string;
	description: string;
	date: string | Date;
	tags: Array<string>;
	type: "tutorial" | "project" | "article" | "diary" | "worklog";
	collection?: string | undefined;
	published?: boolean | undefined;
	cover_image?: boolean | string | undefined;
	reading_time?: ReadingTime | undefined;
}

export interface BlogMetadata
	extends Omit<RawBlogMetadata, "date" | "reading_time"> {
	slug: string;
	date: string;
	sort_date: string;
	source_path: string;
	cover_image?: boolean | undefined;
	cover_url?: string | undefined;
	prev_slug: string | undefined;
	next_slug: string | undefined;
	reading_time: ReadingTime;
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

export type SocialLink = {
	label: string;
	href: string;
	icon: string;
	hoverClass: string;
};

export const socials: SocialLink[] = [
	{
		label: "GitHub",
		href: "https://github.com/esskayesss",
		icon: "ph:github-logo",
		hoverClass: "hover:text-accent-fg",
	},
	{
		label: "X",
		href: "https://x.com/esskayesss_",
		icon: "ph:x-logo",
		hoverClass: "hover:text-light-100",
	},
	{
		label: "Instagram",
		href: "https://instagram.com/esskayesss_",
		icon: "ph:instagram-logo",
		hoverClass: "hover:text-magenta-fg",
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com/in/esskayesss",
		icon: "ph:linkedin-logo",
		hoverClass: "hover:text-blue-fg",
	},
	{
		label: "YouTube",
		href: "https://youtube.com/@esskayesss",
		icon: "ph:youtube-logo",
		hoverClass: "hover:text-red-90",
	},
	{
		label: "Email",
		href: "mailto:ess@esskayesss.dev",
		icon: "ph:envelope-simple",
		hoverClass: "hover:text-dim-fg",
	},
];

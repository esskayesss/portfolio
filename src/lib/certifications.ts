import type { CertificationMetadata } from "./types";

export const certifications: Array<CertificationMetadata> = [
	{
		title: "C Programming with Linux",
		issuer: "Coursera",
		description:
			"The C Programming with Linux Specialization from IMT and Dartmouth, provides the skills to write, read and debug computer programs in the C programming language. This course also improved my familiarity with the linux operating system.",
	},
	{
		title: "Neural Networks and Deep Learning",
		issuer: "Coursera",
		description: "A foundational course on Neural Networks by ",
		link: {
			href: "https://deeplearning.ai",
			label: "deeplearning.ai",
		},
		suffix: ".",
	},
	{
		title: "Winner · Kavach Hackathon, 2023",
		issuer: "Contest",
		description:
			"Kavach is a cybersecurity hackathon organized by the Innovation Cell of the Ministry of Education, AICTE, in collaboration with the wings of the Ministry of Home Affairs - BPR&D and I4C.",
	},
	{
		title: "Winner · Smart India Hackathon, 2023",
		issuer: "Contest",
		description:
			"SIH is a national hackathon organized by AICTE, Innovation Cell of the Ministry of Education.",
	},
];

import type { BlogMetadata } from "./types";

// Temporary homepage previews until Checkpoint 3 wires mdsvex/content loading.
export const blogPreviews: Array<BlogMetadata> = [
	{
		title: "building a realtime chat application",
		description:
			"Learn how to create a scalable real-time chat application using WebSocket protocol, with practical examples and performance optimization tips",
		slug: "brainfuck-c",
		date: "2024-03-20",
		tags: ["c", "brainfuck", "interpreters"],
		type: "project",
		published: false,
		prev_slug: undefined,
		next_slug: undefined,
		reading_time: {
			minutes: 4,
			words: 760,
		},
	},
];

export const latestBlogPreviews = [...blogPreviews]
	.sort((left, right) => Date.parse(right.date) - Date.parse(left.date))
	.slice(0, 3);

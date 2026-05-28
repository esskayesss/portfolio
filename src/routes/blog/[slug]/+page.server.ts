import { error } from "@sveltejs/kit";
import { getBlogPost } from "$lib/blogs.server";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
	if (!params.slug) {
		error(404, "Post not found");
	}

	const post = getBlogPost(params.slug);

	if (!post) {
		error(404, "Post not found");
	}

	return { post };
};

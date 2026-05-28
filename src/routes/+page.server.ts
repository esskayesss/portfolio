import { latestBlogPosts } from "$lib/blogs.server";
import { certifications } from "$lib/certifications.server";
import { projects } from "$lib/projects.server";

export const load = () => ({
	latestBlogPosts,
	certifications,
	projects,
});

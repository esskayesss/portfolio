import {PostMetadata, getXBlogPosts} from "@/lib/blog";
import {ProjectMetadata} from "@/lib/types";

const projects_titles: Array<string> = [
  'clishae', 'b64ed', 'helmdall'
];

const projects: Array<ProjectMetadata> = []
export const blogs: Array<PostMetadata> = await getXBlogPosts(3);

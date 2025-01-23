import { globby } from "globby";
import { parsePost, Post, PostMetadata } from "./posts";

let postsMetadata: Array<PostMetadata> | undefined = undefined;

export const getAllBlogPosts = async (): Promise<Array<PostMetadata>> => {
  if(postsMetadata) return postsMetadata;

  const paths = await globby(`./content/blog/**/*.mdx`);
  const blogs: Array<PostMetadata> = []
  paths.forEach((path) => {
    const post = parsePost(path)
    if (post.published === false && process.env.NODE_ENV === 'production') return;
    blogs.push(post as PostMetadata)
  });
  postsMetadata = blogs.sort((a, b) => { return new Date(b.date).getTime() - new Date(a.date).getTime() });
  return postsMetadata
}

export const getXBlogPosts = async (x: number): Promise<Array<PostMetadata>> => {
  return getAllBlogPosts().then((posts) => posts.slice(0, x))
}

export const getBlogPost = async (slug: string): Promise<Post | null> => {
  const path = await globby(`./content/blog/${slug}.mdx`);
  if(path.length === 0) return null;

  return parsePost(path[0])
}



'use server'

import { globby } from "globby";
import { parsePost, Post } from "./posts";

var allBlogs: Record<string, Post> | null = null
var sortedSlugs: Array<string> | null = null

export const getAllBlogPosts = async (): Promise<Record<string, Post>> => {
  if (process.env.NODE_ENV === 'production' && allBlogs !== null) return allBlogs;

  const paths = await globby(`./content/blog/**/*.mdx`);
  var blogs: Record<string, Post> = {}

  for (const path of paths) {
    const post = await parsePost(path);
    if (post.metadata.published === false && process.env.NODE_ENV === 'production') continue;

    var slug = post.slug;
    var collection = post.metadata.collection;

    if (slug in blogs) {
      slug = `${slug}_${collection}`;
      post.slug = slug;
    }

    blogs[slug] = post;
  }

  allBlogs = blogs
  return allBlogs;
}

export const getBlogBySlug = async (slug: string): Promise<Post | undefined> => {
  return (await getAllBlogPosts())[slug]
}

export const getLatestBlogSlugs = async (): Promise<Array<string>> => {
  if (sortedSlugs !== null) return sortedSlugs;

  const blogs = await getAllBlogPosts()
  var sorted = Object.keys(blogs)
  sorted.sort((a, b) => new Date(blogs[b].metadata.date).getTime() - new Date(blogs[a].metadata.date).getTime())

  sortedSlugs = sorted
  return sortedSlugs
}

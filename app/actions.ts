'use server';
import { getBlogBySlug } from "@/lib/blogs";
import { getTOC } from "@/lib/posts";

export async function fetchTOC(slug: string) {
  const blog = await getBlogBySlug(slug)
  if(!blog) throw 'could not read toc'
  return await getTOC(blog.metadata.title, blog.body);
}

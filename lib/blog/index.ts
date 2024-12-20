import {readFileSync} from "fs";
import {globby} from "globby";
import matter from "gray-matter";
import {remark} from "remark";
import remarkMdx from "remark-mdx";
import {visit} from "unist-util-visit";

export function calculateReadingTime(content: string): {
  minutes: number;
  words: number;
} {
  const words = content
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0);
  const wordCount = words.length;
  const wordsPerMinute = 60; // Average reading speed

  // Calculate total minutes as a float
  const minutes = Math.floor(wordCount / wordsPerMinute);
  return {
    minutes,
    words: wordCount
  };
}

export interface BlogBrief {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: Array<string>;
  type: 'tutorial' | 'project' | 'article' | 'diary';
  collection?: string | undefined;
  published?: boolean | undefined;
  cover_image?: string | undefined;
  reading_time: {
    minutes: number,
    words: number
  }
}

export interface BlogPost extends BlogBrief{
  body: string;
  next_slug: string | undefined;
  prev_slug: string | undefined;
}

let postsMetadata: Array<BlogBrief> | undefined = undefined;

export const getBlogPosts = async (): Promise<Array<BlogBrief>> => {
  if(postsMetadata) return postsMetadata;

  const paths = await globby(`./content/**/*.mdx`);
  const blogs: Array<BlogBrief> = []
  paths.forEach((path) => {
    const contents = readFileSync(path, 'utf-8')
    const {data, content: body} = matter(contents);
    if (data.published === false && process.env.NODE_ENV === 'production') return;
    const slug = path.split('/').pop()?.replace('.mdx', '');
    blogs.push({
      title: data.title,
      description: data.description,
      date: data.date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}),
      tags: data.tags,
      slug: slug,
      type: data.type,
      collection: data.collection,
      published: data.published === undefined ? true : data.published,
      cover_image: data.cover,
      reading_time: calculateReadingTime(body)
    } as BlogBrief)
  });
  postsMetadata = blogs.sort((a, b) => { return new Date(b.date).getTime() - new Date(a.date).getTime() });
  return postsMetadata
}

export const getXBlogPosts = async (x: number): Promise<Array<BlogBrief>> => {
  return getBlogPosts().then((posts) => posts.slice(0, x))
}

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const path = await globby(`./content/**/${slug}.mdx`);
  if(path.length === 0) return null;

  const contents = readFileSync(path[0], 'utf-8');
  const {data, content: body} = matter(contents);
  return {
    title: data.title,
    description: data.description,
    date: data.date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}),
    tags: data.tags,
    slug: slug,
    type: data.type,
    collection: data.collection,
    published: data.published === undefined ? true : data.published,
    body: body,
    cover_image: data.cover,
    reading_time: calculateReadingTime(body),
    next_slug: data.next,
    prev_slug: data.prev
  } as BlogPost
}

export interface TOC {
  title: string;
  items: Array<string>;
}

export const getTOC = async (slug: string): Promise<TOC | null> => {
  const path = await globby(`./content/**/${slug}.mdx`);
  if(path.length === 0) return null;

  const contents = readFileSync(path[0], 'utf-8');
  const {data, content: body} = matter(contents);

  const headings: Array<string> = [];
  await remark()
    .use(remarkMdx)
    .use(() => (tree) => {
      visit(tree, 'heading', (node) => {
        headings.push(node['children'][0]['value']);
      });
    })
    .process(body);

  return {
    title: data.title,
    items: headings
  }
}
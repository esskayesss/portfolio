import {readFileSync} from "fs";
import {globby} from "globby";
import matter from "gray-matter";
import {remark} from "remark";
import remarkMdx from "remark-mdx";
import {visit} from "unist-util-visit";


export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  slug: string;
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

export interface Post extends PostMetadata{
  body: string;
  next_slug: string | undefined;
  prev_slug: string | undefined;
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

const parsePost = (path: string): Post => {
  const contents = readFileSync(path, 'utf-8');
  const slug = path.split('/').pop()?.replace('.mdx', '') ?? 'unknown-slug';
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
  }
}

let postsMetadata: Array<PostMetadata> | undefined = undefined;

export const getAllBlogPosts = async (): Promise<Array<PostMetadata>> => {
  if(postsMetadata) return postsMetadata;

  const paths = await globby(`./content/**/*.mdx`);
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
  const path = await globby(`./content/**/${slug}.mdx`);
  if(path.length === 0) return null;

  return parsePost(path[0])
}

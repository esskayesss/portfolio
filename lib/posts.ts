import {readFileSync} from "fs";
import matter from "gray-matter";
import {remark} from "remark";
import remarkMdx from "remark-mdx";
import {visit} from "unist-util-visit";

export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  path: string;
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

export interface Post {
  slug: string;
  body: string;
  metadata: PostMetadata;
  next_slug: string | undefined;
  prev_slug: string | undefined;
}

export interface TOC {
  title: string;
  items: Array<string>;
}

export const getTOC = async (title: string, body: string): Promise<TOC | null> => {
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
    title: title,
    items: headings
  }
}


function calculateReadingTime(content: string): {
  minutes: number;
  words: number;
} {
  const words = content
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0);
  const wordCount = words.length;
  const wordsPerMinute = 60;

  const minutes = Math.floor(wordCount / wordsPerMinute);
  return {
    minutes,
    words: wordCount
  };
}

export const parsePost = (path: string): Post => {
  const contents = readFileSync(path, 'utf-8');
  const regex = /\/content\/blog\/(?:([^\/]+)\/)?([^\/]+)\.mdx$/;
  const match = path.match(regex)
  
  if (!match) {
    throw new Error(`Invalid path format: ${path}`);
  }

  const [, collection, slug] = match;
  const {data, content: body} = matter(contents);

  const metadata: PostMetadata = {
    title: data.title,
    description: data.description,
    path: path,
    date: data.date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}),
    tags: data.tags,
    type: data.type,
    collection: collection,
    published: data.published === undefined ? true : data.published,
    cover_image: data.cover,
    reading_time: calculateReadingTime(body),
  }

  return {
    slug: slug,
    body: body,
    metadata: metadata,
    next_slug: data.next,
    prev_slug: data.prev,
  }
}


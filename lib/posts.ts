'use server'

import {readFile} from "fs/promises";
import { existsSync } from "fs";
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
  type: 'tutorial' | 'project' | 'article' | 'diary' | 'worklog';
  collection?: string | undefined;
  published?: boolean | undefined;
  cover_image?: boolean;
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

export const parsePost = async (path: string): Promise<Post> => {
  try {
    const contents = await readFile(path, 'utf-8');

    const regex = /\/content\/blog\/(?:([^\/]+)\/)?([^\/]+)\.mdx$/;
    const match = path.match(regex);

    if (!match) {
      throw new Error(`Invalid path format: ${path}`);
    }

    const [, collection, slug] = match;

    const { data, content: body } = matter(contents);

    const finalSlug = data.slug || slug;
    if (!finalSlug) {
      throw new Error(`Slug could not be determined for path: ${path}`);
    }

    const coverImagePath = `./public/static/blog/${finalSlug}/cover.webp`;
    const cover = existsSync(coverImagePath);

    let date: Date;
    if (data.date) {
      date = new Date(data.date);
      if (isNaN(date.getTime())) {
        throw new Error(`Invalid date format in front matter: ${data.date}`);
      }
    } else {
      date = new Date();
    }

    const metadata: PostMetadata = {
      title: data.title || 'Untitled',
      description: data.description || '',
      path: path,
      date: date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      tags: data.tags || [],
      type: data.type || 'post',
      collection: collection || undefined,
      published: data.published === undefined ? true : data.published,
      cover_image: cover,
      reading_time: calculateReadingTime(body),
    };

    return {
      slug: finalSlug,
      body: body,
      metadata: metadata,
      next_slug: data.next,
      prev_slug: data.prev,
    };
  } catch (error: any) {
    console.error(`Error parsing post at path ${path}:`, error);
    throw new Error(`Failed to parse post: ${error.message}`);
  }
};

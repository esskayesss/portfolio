import React from "react";
import type { Metadata } from 'next'
import {BlogActions} from "@/components/ui/blog/actions";
import { getBlogBySlug } from "@/lib/blogs";
import {notFound} from "next/navigation";

export async function generateMetadata(
  {params}: {params: Promise<{ slug: string }>}
): Promise<Metadata> {
  const slug = (await params).slug
  const blog = await getBlogBySlug(slug)
  if(!blog) notFound()

  return {
    title: blog.metadata.title,
    description: blog.metadata.description,
    keywords: blog.metadata.tags,
    openGraph: {
      images: [`/opengraph/${slug}.png`]
    }
  }
}

export default async function BaseLayout({children, params}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>
}>) {
  const slug = (await params).slug
  return (
    <>
      <main className={`pb-28`} id={'blog'}>
        {children}
      </main>
      <BlogActions slug={slug}/>
    </>
  );
}

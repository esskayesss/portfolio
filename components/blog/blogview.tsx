import React from "react";
import { Post } from "@/lib/posts";
import {getAllBlogPosts} from "@/lib/blogs";
import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";
import components from "@/components/blog/components";
import Image from "next/image";

const BlogMDX = ({source}: {source: string}) => {
  return (
    <MDXRemote source={source} components={components} />
  )
}

export const Blog: React.FC<{slug: string}> = async ({slug}) => {
  const contents: Post | null = (await getAllBlogPosts())[slug];

  if(!contents || (!contents.metadata.published && process.env.NODE_ENV === 'production')){
    notFound()
  }

  return (
    <>
      <div className="about flex flex-col gap-4">
        <div className="font-proto flex gap-4 text-sm">
          <span className={'tag bg-dim-bg border-accent-fg'}>{contents.metadata.type}</span>
          {contents.metadata.collection? <span className={'tag bg-blue-bg border-yellow-fg'}>SERIES: {contents.metadata.collection}</span> : null}
        </div>
        <div className="text-sm text-dim-fg">{contents.metadata.date} · {contents.metadata.reading_time.minutes} minute read </div>
        <div className="flex flex-col">
          <h1 className={`text-xl text-fg font-proto`}>{contents.metadata.title}</h1>
          <p className={`text-base text-dim-fg`}>{contents.metadata.description}</p>
        </div>
        {contents.metadata.cover_image?
          <Image src={`/static/blog/${contents.slug}/cover.webp`} alt={''}
                 width={1000} height={1000}
                 className={`mix-blend-lighten`}
                 style={{width: "100%", height: "auto"}}
          />:null
        }
      </div>
      <div className={'section'}>
        <div className="content !gap-2">
          <BlogMDX source={contents.body} />
        </div>
      </div>
    </>
  )
}

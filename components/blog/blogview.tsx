import React from "react";
import {BlogPost, getBlogPost} from "@/lib/blog";
import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";
import components from "@/components/blog/components";
import Image from "next/image";

const BlogMDX = ({source}: {source: string}) => {
  return (
    <MDXRemote source={source} components={components}/>
  )
}

export const Blog: React.FC<{slug: string}> = async ({slug}: {slug: string}) => {
  const contents: BlogPost | null = await getBlogPost(slug);
  if(!contents || (!contents.published && process.env.NODE_ENV === 'production')){
    notFound()
  }

  return (
    <>
      <div className="about flex flex-col gap-4">
        <div className="font-proto flex gap-4 text-sm">
          <span className={'tag bg-dim-bg border-accent-fg'}>{contents.type}</span>
          {contents.collection? <span className={'tag bg-blue-bg border-yellow-fg'}>{contents.collection}</span> : null}
        </div>
        <div className="text-sm text-dim-fg">{contents.date} · {contents.reading_time.minutes} minute read </div>
        <div className="flex flex-col">
          <span className={`text-xl font-proto`}>{contents.title}</span>
          <p className={`text-base text-dim-fg`}>{contents.description}</p>
        </div>
        {contents.cover_image?
          <Image src={`/static/blog/${contents.slug}/cover.webp`} alt={''}
                 width={1000} height={1000}
                 className={`bg-blend-color-lighten`}
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
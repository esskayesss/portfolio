import React from "react";
import Image from "next/image";
import Link from "next/link";
import {BlogBrief} from "@/lib/blog";

interface BlogCardProps extends BlogBrief {
  thumbnail?: boolean
}

export const BlogCard: React.FC<BlogCardProps> = ({thumbnail = true, ...props}) => {
  if(thumbnail){
    thumbnail = props.cover_image !== undefined;
  }
  return (
    <div className="flex flex-col gap-2 border border-ghost p-4">
      {thumbnail?
        <Image src={'/static/blog/' + props.slug + '/cover.webp'}
               alt={'support'}
               width={1000} height={1000}
               style={{width: '100%', height: 'auto', objectFit: 'cover'}}
               className={`bg-blend-color-lighten aspect-[24/9]`}
        />:null
      }
      <div className="flex flex-col gap-2">
        <span className={`text-xs text-dim-fg`}>{props.date} · {props.reading_time.minutes} minute read</span>
        <div className="data">
          <Link href={`/blog/${props.slug}`}
                className={`!text-accent-fg font-proto text-lg`}>
            {props.title} {props.published?null:<span className={`text-bg bg-fg px-4`}>Draft</span>}
          </Link>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}
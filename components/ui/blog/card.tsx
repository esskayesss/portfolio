import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Post} from "@/lib/posts";

interface BlogCardProps extends Post {
  thumbnail?: boolean
}

export const BlogCard: React.FC<BlogCardProps> = ({thumbnail = true, ...props}) => {
  if(thumbnail){
    thumbnail = props.metadata.cover_image || false;
  }

  return (
    <div className="flex flex-col gap-2 border border-ghost p-4">
      {thumbnail?
        <Image src={'/static/blog/' + props.slug + '/cover.webp'}
               alt={'support'}
               width={1000} height={1000}
               style={{width: '100%', height: 'auto', objectFit: 'contain'}}
               className={`mix-blend-lighten aspect-[24/9]`}
        />:null
      }
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-x-4 gap-y-0 text-xs">
          <span className={`text-dim-fg`}>{props.metadata.date} · {props.metadata.reading_time.minutes} minute read</span>
          {props.metadata.collection? <span className={'font-proto w-fit border border-yellow-fg px-1'}>{props.metadata.collection}</span> : null}
        </div>
        <div className="data">
          <Link href={`/blog/${props.slug}`}
                className={`!text-accent-fg font-proto text-lg`}>
            {props.metadata.title} {props.metadata.published?null:<span className={`text-bg bg-fg px-4`}>Draft</span>}
          </Link>
          <p>{props.metadata.description}</p>
        </div>
      </div>
    </div>
  )
}

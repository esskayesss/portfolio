import React from "react";
import {TagLink} from "@/components/ui/tags";
import Link from "next/link";

interface ProjectListEntryProps {
  title: string;
  github?: string | undefined;
  website?: string | undefined;
  children: React.ReactNode;
  blog?: string | undefined;
}

export const ProjectListEntry: React.FC<ProjectListEntryProps> = ({children: body, ...props}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <span>{props.title}</span>
        <div className="flex gap-1">
          {props.website && <TagLink href={props.website} />}
          {props.github &&
              <TagLink title={props.website?'':props.github} href={'https://github.com/' + props.github} />}
        </div>
      </div>
      <div className="text-dim-fg">
        {body}
        {props.blog ?
          <Link href={`/blog/${props.blog}`}
                className={'animate mx-2 text-blue-fg hover:underline'}>
            Read the full writeup here.
          </Link>
          : null}
      </div>
    </div>
  );
}
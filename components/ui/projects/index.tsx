import React from "react";
import {TagLink} from "@/components/ui/tags";
import Link from "next/link";
import {RxArrowTopRight} from "react-icons/rx";

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
          {props.github && <TagLink icon={'github'} color={'green'} title={props.github} href={props.github}></TagLink>}
          {props.website && <TagLink href={props.website}></TagLink>}
        </div>
      </div>
      <div className="text-dim-fg">
        {body}
        {props.blog ?
          <Link href={`/blog/${props.blog}`}
                className={'animate group text-fg mx-2 inline-flex items-center no-underline border-b hover:border-blue-fg hover:text-blue-fg'}>
            Full writeup. <RxArrowTopRight className={`animate group-hover:rotate-12`}/>
          </Link>
          : null}
      </div>
    </div>
  );
}
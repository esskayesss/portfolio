import React from "react";
import {Tag, TagLink} from "@/components/ui/tags";

interface ExpListEntryProps {
  title: string;
  timeline: string;
  website?: string | undefined;
  location: string;
  org: string;
  description?: string;
}

export const ExpListEntry: React.FC<ExpListEntryProps> = ({...props}) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center'>
        <span>{props.title}</span>
        {props.website?<TagLink href={props.website} title={props.org} />:<Tag title={props.org} icon={'org'} />}
      </div>
      <div className='flex justify-between items-center text-xs text-dim-fg'>
        <span>{props.timeline}</span>
        <span>{props.location}</span>
      </div>
      {props.description && <p className="text-sm pt-2">{props.description}</p> }
    </div>
  )
}

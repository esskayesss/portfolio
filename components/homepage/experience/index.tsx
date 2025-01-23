'use client';

import {ExpListEntry} from "@/components/ui/experience";
import React from "react";
import {IoMdArrowDropdown} from "react-icons/io";

export const HomepageExperienceSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className={'flex flex-col'}>
      <ExpListEntry
        title={'Full Stack SWE (Intern)'}
        timeline={'September - November, 2024'}
        website={'https://instahyte.com'}
        org={'instahyre'}
        location={'Remote'}>
      </ExpListEntry>
      <div 
        className={`flex items-center gap-1 py-2 text-xs text-dim-fg *:transition-all duration-300
          cursor-pointer select-none transition-all *:animate text-fg ${isExpanded?'*:text-accent-fg':''}`}
        onClick={() => setIsExpanded(!isExpanded)}>
        <IoMdArrowDropdown className={`${isExpanded?'-rotate-180':''}`}/>
        <span>{isExpanded?'Hide':'Show'} Previous Roles</span>
      </div>
      <div className={`flex flex-col gap-2 animate ${isExpanded?'':'hidden'}`}>
        <ExpListEntry
          title={'Student Developer'}
          timeline={'May, 2024 - December, 2024'}
          website={'https://www.aicte-india.org/'}
          org={'AICTE'}
          location={'Remote'}>
        </ExpListEntry>
        <ExpListEntry
          title={'Fullstack Dev (Freelance)'}
          timeline={'June - October, 2021'}
          org={'printhaste'}
          location={'Remote'}>
        </ExpListEntry>
      </div>
    </div>
  )
}

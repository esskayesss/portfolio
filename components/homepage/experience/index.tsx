'use client';

import {ExpListEntry} from "@/components/ui/experience";
import React from "react";
import {IoMdArrowDropdown} from "react-icons/io";

export const HomepageExperienceSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className={'flex flex-col'}>
      <ExpListEntry
        title={'Consultant, Automations Team - Digital Risk'}
        timeline={'August 2025 - Present'}
        website={'https://www.ey.com/en_gl/careers/global-delivery-services'}
        org={'EY GDS'}
        location={'Kolkata, India'}
        description={'Full Stack Developer in the Automations team, driving Digital Risk solutions under Risk Consultancy. Collaborating with Microsoft to develop the M365Compliance platform using ASP.NET and React. Building key components for the Trust Copilot Teams bot, extending its tool calling chain to enable efficient AI-powered compliance workflows.'} />
      <div 
        className={`flex items-center gap-1 py-2 text-xs text-dim-fg *:transition-all *:duration-500
          cursor-pointer select-none transition-all *:animate text-fg ${isExpanded?'*:text-accent-fg':''}`}
        onClick={() => setIsExpanded(!isExpanded)}>
        <IoMdArrowDropdown className={`${isExpanded?'-scale-100':''}`}/>
        <span>{isExpanded?'Hide':'Show'} Previous Roles</span>
      </div>
      <div className={`flex flex-col gap-2 animate ${isExpanded?'':'hidden'}`}>
        <ExpListEntry
          title={'Machine Learning Engineer (Intern)'}
          timeline={'March - July, 2025'}
          org={'Voltera Group, HK'}
          location={'Remote'} />
        <ExpListEntry
          title={'Full Stack SWE (Intern)'}
          timeline={'September - November, 2024'}
          website={'https://instahyte.com'}
          org={'instahyre'}
          location={'Remote'}>
        </ExpListEntry>
        <ExpListEntry
          title={'Student Developer'}
          timeline={'May, 2024 - September, 2024'}
          website={'https://www.aicte-india.org/'}
          org={'AICTE'}
          location={'Remote'}>
        </ExpListEntry>
        <ExpListEntry
          title={'Full Stack SWE (Freelance)'}
          timeline={'June - October, 2021'}
          org={'printhaste'}
          location={'Remote'}>
        </ExpListEntry>
      </div>
    </div>
  )
}

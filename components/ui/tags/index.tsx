import React from "react";
import Link from "next/link";
import {MingcuteWorldLine} from "@/components/ui/icons/web";
import {TbBrandGithub} from "react-icons/tb";
import {IoMdBusiness} from "react-icons/io";
import {PiArrowUpRight} from "react-icons/pi";

const icon_map = {
  'web': <MingcuteWorldLine />,
  'github': <TbBrandGithub />,
  'org': <IoMdBusiness />,
  'none': <></>,
}

const color_map = {
  green: "bg-green-bg",
  magenta: "bg-magenta-bg",
}

interface TagProps {
  title?: string | undefined;
  icon?: 'web' | 'github' | 'org' | 'none';
  color?: 'green' | 'magenta';
}

export const Tag: React.FC<TagProps> = ({title, icon = 'web', color = 'magenta'}) => {
  const color_class = `bg-${color}-bg`;
  return (
    <div className={`no-underline flex items-center gap-1 px-1 ${color_class}`}>
      <span className={'text-lg'}>{icon_map[icon]}</span><span>{ title }</span>
    </div>
  )
}

interface TagLinkProps extends TagProps {
  href: string;
  external?: boolean | undefined;
}

export const TagLink: React.FC<TagLinkProps> = ({href, title, icon = 'web', color = 'magenta', external = 'false'}) => {
  return (
    <Link href={href}
          target={external?'_blank':'_self'}
          className={`!text-fg no-underline flex items-center gap-1 px-1 ${color_map[color]} ${external?'external':''}`}
    >
      <span className={'text-lg'}>{icon_map[icon]}</span><span>{ title || href}</span>
      {external?
        <PiArrowUpRight />:null
      }
    </Link>
  )
}
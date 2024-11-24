import React from "react";
import Link from "next/link";
import {MingcuteWorldLine} from "@/components/ui/icons/web";
import {TbBrandGithub} from "react-icons/tb";
import {IoMdBusiness} from "react-icons/io";
import {PiArrowUpRight} from "react-icons/pi";

const getHostname = (url: string) => {
  return new URL(url).hostname;
}

const url_icon_map: Record<string, string> = {
  'github.com': 'github',
  'wikipedia.org': 'wikipedia',
  'www.youtube.com': 'youtube',
  'x.com': 'twitter'
};

const url_class_map: Record<string, string> = {
  'github.com': 'bg-dim-bg',
  'wikipedia.org': 'bg-fg text-bg',
  'www.youtube.com': 'bg-red-500 text-fg',
  'x.com': 'blue',
}

const icon_map: Record<string, React.ReactNode> = {
  'web': <MingcuteWorldLine />,
  'github': <TbBrandGithub />,
  'org': <IoMdBusiness />,
  'none': <></>,
}

interface TagProps {
  title?: string | undefined;
  icon?: 'org' | 'none';
  color?: 'green' | 'magenta';
}

export const Tag: React.FC<TagProps> = ({title, icon = 'none', color = 'magenta'}) => {
  const color_class = `bg-${color}-bg`;
  return (
    <div className={`no-underline flex items-center gap-1 px-1 ${color_class}`}>
      {icon != 'none'?<span className={'text-lg'}>{icon_map[icon]}</span>:null}
      <span>{ title }</span>
    </div>
  )
}

interface TagLinkProps extends Omit<TagProps, 'color'> {
  href: string;
  external?: boolean | undefined;
}

export const TagLink: React.FC<TagLinkProps> = ({...props}) => {
  const hostname = getHostname(props.href)
  const icon = url_icon_map[hostname] || 'web'
  const className = url_class_map[hostname] || 'bg-magenta-bg'
  let title = props.title
  if (title === undefined)
    title = getHostname(props.href)

  const external = props.href.startsWith('https://') && !props.href.startsWith('https://esskayesss.dev');
  return (
    <Link href={props.href}
          target={external?'_blank':'_self'}
          className={`!text-fg no-underline flex items-center gap-1 px-1 ${className} ${external?'external':''}`}
    >
      {external?<span className={'text-lg'}>{icon_map[icon]}</span>:null}
      <span>{title}</span>
      {external?<PiArrowUpRight className={'text-accent-fg'}/>:null}
    </Link>
  )
}
'use client';

import Link from "next/link";
import React from "react";
import {IoCloseOutline} from "react-icons/io5";
import {PiListBullets} from "react-icons/pi";

interface TOCProps {
  slug: string,
  onClick: () => void,
  className?: string | undefined,
  toc: {
    title: string,
    items: string[]
  }
}

export const TOCButton: React.FC<{
  slug: string,
  toc: {
    title: string,
    items: string[]
  }
}> = ({slug, toc}) => {
  const [isTOCOpen, setIsTOCOpen] = React.useState(false);

  const openMenu = () => {
    setIsTOCOpen(true);
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    setIsTOCOpen(false);
    document.body.style.overflow = "auto"
  }

  return (
    <span className={`relative cursor-pointer animate`}>
      <TOC slug={slug}
           className={`${isTOCOpen ? 'visible' : 'invisible'}`}
           toc={toc}
           onClick={() => closeMenu()}/>
      {isTOCOpen ?
        <IoCloseOutline className={'text-3xl'} onClick={() => closeMenu()}/> :
        <PiListBullets onClick={() => openMenu()}/>
      }
    </span>
  )
}

const TOC: React.FC<TOCProps> = ({onClick, className, toc}) => {
  const {title, items} = toc;
  return (
    <>
      <div className={`${className} overlay fixed z-40 backdrop-blur-sm w-screen h-screen left-0 bottom-[6.1rem]`}
           onClick={onClick}></div>
      <div
        className={`${className} toc flex flex-col gap-2 font-proto text-2xl bg-bg 
        absolute bottom-full right-0 mb-12 z-50 pb-4 max-w-[90vw] max-h-[85dvh] 
        border border-accent-fg min-w-[356px] *:px-4 *:py-2 overflow-y-scroll`}>
        <span className={`sticky text-lg py-4 bg-dim-bg border-b mb-4`}>{title}</span>
        {items.map((item, index) => (
          <Link key={index}
                href={`#${item.toString().replaceAll(" ", "-").toLowerCase()}`}
                onClick={onClick}
                className={`no-underline text-base w-full hover:bg-dim-bg`}>
            {item}
          </Link>
        ))}
      </div>
    </>
  )
}
'use client';

import {PiList} from "react-icons/pi";
import React from "react";
import Link from "next/link";
import {GrDocumentPdf} from "react-icons/gr";
import {IoCloseOutline} from "react-icons/io5";
import {usePathname} from "next/navigation";

const nav_links = [
  {title: 'home', href: '/'},
  {title: 'projects', href: '/projects'},
  {title: 'blog', href: '/blog'},
]

const NavigationMenu: React.FC<{
  className?: string | undefined,
  onClick: () => void
}> = ({className, onClick}) => {
  const pathname = usePathname();

  return (
    <>
      <div className={`w-screen h-screen fixed left-0 top-16 z-50 backdrop-blur-sm ${className}`} onClick={onClick}></div>
      <div
        className={`${className} absolute z-50 right-0 top-full my-4 py-10 px-8 bg-bg border-2 border-accent-fg shadow-xl`}>
        <nav
          className={'flex flex-col gap-6 items-end font-proto *:no-underline text-xl' +
            ' *:flex *:gap-1 *:items-center *:whitespace-nowrap *:px-2' +
            ' min-w-60'}>
          {
            nav_links.map(({title, href}, _index) => {
              return (
                <Link
                  href={href} key={title}
                  className={`text-fg hover:bg-blue-bg ${pathname === href ? 'bg-dim-bg !text-blue-fg' : ''}`}
                  onClick={onClick}
                >
                  {title}
                </Link>
              );
            })
          }
          <a href={'/resume.pdf'} className={'hover:bg-ghost'} onClick={onClick}>resume <GrDocumentPdf
            className={`text-lg`}/> </a>
          <Link href={'/support'} className={`bg-yellow-bg text-yellow-fg`} onClick={onClick}>
            support me
          </Link>
        </nav>
      </div>
    </>
  )
}

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto"
  }

  return (
    <div className={'relative'}>
      {isMenuOpen?
        <IoCloseOutline className={'text-3xl cursor-pointer'} onClick={() => closeMenu()} />:
        <PiList className="text-3xl cursor-pointer" onClick={() => openMenu()} />
      }
      <NavigationMenu
        className={`${isMenuOpen ? 'visible' : 'invisible'}`}
        onClick={() => closeMenu()}
      />
    </div>
  )
}

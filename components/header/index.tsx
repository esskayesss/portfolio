import Image from "next/image"
import {PiMagnifyingGlass} from "react-icons/pi"
import React from "react";
import {Navigation} from "@/components/ui/nav";
import Link from "next/link";

export const Header: React.FC<{blog?: boolean}> = ({blog = false}) => {
  return (
    <header className="flex shadow-bg shadow-lg justify-between w-full z-10 sticky py-4 top-0 left-0 z-9 bg-bg max-w-6xl mx-auto">
      <Link href={`/${blog?'blog':''}`} className="flex font-proto text-xl items-center gap-2 no-underline">
        <Image src="/logo.webp" width="14" height="14" alt="contour logo" />
        <h1>esskayesss</h1>
        {blog?<span className={`no-underline px-4 py-0.5 bg-dim-bg border border-accent-fg rounded-full text-xs`}>BLOG</span>:null}
      </Link>
      <div className="flex items-center gap-4 text-3xl">
        {blog?<PiMagnifyingGlass className={`cursor-pointer`} />:null}
        <Navigation/>
      </div>
    </header>
  )
}

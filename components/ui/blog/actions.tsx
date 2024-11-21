import React from "react";
import {
  PiBookOpenText,
  PiChatTeardropDots,
  PiHandCoins,
  PiShareNetwork,
  PiWaveformDuotone
} from "react-icons/pi";
import Link from "next/link";
import {TOCButton} from "@/components/blog/toc";
import {fetchTOC} from "@/app/actions";

export const BlogActions: React.FC<{ slug: string }> = async ({slug}) => {
  const toc = await fetchTOC(slug);

  return (
    <div
      className={`fixed bottom-0 h-14 bg-bg w-screen left-0 flex justify-between px-12 py-12 border-t border-ghost items-center`}>
      <div className="flex justify-between w-full max-w-6xl mx-auto">
        <div className="left flex items-center gap-8 *:text-3xl *:cursor-pointer">
          <PiWaveformDuotone/>
          <PiChatTeardropDots/>
          <PiShareNetwork/>
          <PiBookOpenText/>
        </div>
        <div className="right flex gap-8 items-center *:text-3xl">
          <Link href="/support"
                className="no-underline bg-yellow-fg text-bg flex gap-2 items-center px-2 py-1 !text-base font-proto">
            <PiHandCoins className={`text-xl`}/> support
          </Link>
          <TOCButton slug={slug} toc={toc} />
        </div>
      </div>
    </div>
  )
}

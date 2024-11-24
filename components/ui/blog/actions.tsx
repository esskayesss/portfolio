import React from "react";
import {
  PiChatTeardropDots, PiCoin, PiLink,
  PiWaveformDuotone
} from "react-icons/pi";
import Link from "next/link";
import {TOCButton} from "@/components/ui/blog/toc";
import {fetchTOC} from "@/app/actions";
import {CopyToClipboard} from "@/components/ui/clipboard-copy";
import {FormatButton} from "@/components/ui/blog/reading";

export const BlogActions: React.FC<{ slug: string }> = async ({slug}) => {
  const toc = await fetchTOC(slug);

  return (
    <div
      className={`fixed bottom-0 h-14 bg-bg w-screen left-0 flex justify-between px-12 py-12 border-t border-ghost items-center z-10`}>
      <div className="relative flex justify-between w-full max-w-6xl mx-auto">
        <div className="left flex items-center gap-8 *:text-3xl *:cursor-pointer">
          <PiWaveformDuotone className={`disabled`}/>
          <Link href={`https://x.com/search?q="https://esskayesss.dev/blog/${slug}"`} target={`_blank`}>
            <PiChatTeardropDots/>
          </Link>
          <CopyToClipboard text={`https://esskayesss.dev/blog/${slug}`}>
            <PiLink />
          </CopyToClipboard>
          <FormatButton />
        </div>
        <div className="right flex gap-8 items-center *:text-3xl">
          <Link href="/support"
                className="no-underline border border-yellow-fg text-yellow-fg flex gap-2 items-center px-2 py-1 !text-base font-proto">
            <PiCoin className={`text-xl`}/>
          </Link>
          <TOCButton slug={slug} toc={toc} />
        </div>
      </div>
    </div>
  )
}

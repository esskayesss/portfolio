'use client';

import React from "react";
import {MaterialSymbolsQrCode2} from "@/components/ui/icons/qr";
import Image from "next/image";

export const SupportCard: React.FC = () => {
  return (
    <div className={`border border-ghost flex items-center justify-between bg-dim-bg p-8`}>
      <div className="left flex items-center gap-8 w-full">
        <Image src={`/headshot.webp`} alt={'uhhh'} width={48} height={48} className={`rounded-full`} />
        <div className="flex flex-col items-start gap-0">
          <span className={`text-xs`}>saurabh sharma.</span>
          <span className={`text-accent-fg`}>esskayesss@ybl</span>
        </div>
      </div>
      <div className="center-row gap-2 text-xs w-fit">
        <MaterialSymbolsQrCode2 className={`text-xl`} /> <span className={'whitespace-nowrap'}>Generate QR</span>
      </div>
    </div>
  )
}
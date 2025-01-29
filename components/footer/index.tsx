import React from "react";
import Image from "next/image";
import Link from "next/link";
import {PiXLogo} from "react-icons/pi";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-2 text-sm text-dim-fg">
      <div className="flex justify-center lg:justify-between w-full max-w-6xl mx-auto text-xs text-dim-fg mt-8">
        <Link href={`https://x.com/esskayesss_`}
              className={`hidden lg:flex items-center gap-2`}><PiXLogo /> @esskayesss_</Link>
        <span className={`flex gap-3`}>
          character permutations, assembled in
          <Image width={18} height={16}
                 src={'/india.webp'} alt={`gm sars.`}
                 style={{opacity: "0.8"}}
          />
        </span>
      </div>
    </footer>
  )
}

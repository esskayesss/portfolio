'use client';

import {PiCheckCircle, PiCopy} from "react-icons/pi";
import React from "react";
import {IoCheckmarkDone} from "react-icons/io5";

export const CopyToClipboard: React.FC<{text: string}> = ({text}) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    });
  }

  return (
    <span className={`relative cursor-pointer animate`} onClick={copy}>
      {isCopied ?
        <PiCheckCircle className={`text-green-fg text-2xl`} /> :
        <PiCopy className={`text-2xl`} />
      }
    </span>
  )
}
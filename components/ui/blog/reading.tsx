'use client';

import React, {useEffect} from "react";
import {IoCloseOutline} from "react-icons/io5";
import {PiBookOpenText, PiMinus, PiPlus} from "react-icons/pi";
import {LoadingOverlay} from "@/components/ui/overlays";

const FONT_SIZE_LIMITS = {
  min: 9,
  max: 13
}

const fontClass: Array<FontClass> = ['font-sans', 'font-mono', 'font-proto']
const class_var_map = {
  'font-sans': '--font-geist-sans',
  'font-mono': '--font-geist-mono',
  'font-proto': '--font-proto-mono',
}

type FontClass = keyof typeof class_var_map;

interface ShareProps {
  onClick: () => void,
  className: string,
}

export const FormatButton: React.FC = () => {
  const [isFormatOpen, setFormatOpen] = React.useState(false);

  const openMenu = () => {
    setFormatOpen(true);
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    setFormatOpen(false);
    document.body.style.overflow = "auto"
  }

  return (
    <span className={`cursor-pointer animate`}>
      <Reading
        className={`${isFormatOpen ? 'visible' : 'invisible'}`}
        onClick={() => closeMenu()}/>
      {isFormatOpen ?
        <IoCloseOutline className={'text-3xl'} onClick={() => closeMenu()}/> :
        <PiBookOpenText onClick={() => openMenu()}/>
      }
    </span>
  )
}

const Reading: React.FC<ShareProps> = ({onClick, className}) => {
  const setBodyFont = (fontClass: FontClass) => {
    const fontVar = getComputedStyle(document.body).getPropertyValue(class_var_map[fontClass]);
    document.getElementById('blog')?.style.setProperty('font-family', fontVar);
  };

  const clampFontSize = (size: number) => {
    return Math.min(Math.max(size, FONT_SIZE_LIMITS.min), FONT_SIZE_LIMITS.max);
  };

  const [rootFontSize, setRootFontSize] = React.useState<number>(10);
  const [fontStyle, setFontStyle] = React.useState<number | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const stored_size = localStorage.getItem('blog-font-size');
    if (!stored_size) {
      localStorage.setItem('blog-font-size', '10');
    } else {
      setRootFontSize(parseInt(stored_size));
    }

    const stored_style = localStorage.getItem('blog-font-style');
    if (!stored_style) {
      localStorage.setItem('blog-font-style', '0');
    } else {
      setFontStyle(parseInt(stored_style));
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (fontStyle !== undefined) {
      console.log(`Setting font style to ${fontStyle}`);
      setBodyFont(fontClass[fontStyle]);
      localStorage.setItem('blog-font-style', fontStyle.toString());
    }
  }, [fontStyle]);

  useEffect(() => {
    if (!rootFontSize) return;
    const clamped_size = clampFontSize(rootFontSize);
    setRootFontSize(clamped_size);
    document.documentElement.style.setProperty('font-size', `${clamped_size}px`);
    localStorage.setItem('blog-font-size', clamped_size.toString());
  }, [rootFontSize]);

  return (
    <>
      <LoadingOverlay className={isLoading ? '' : 'hidden'}/>
      <div className={`${className} overlay fixed z-50 backdrop-blur-sm w-screen h-screen left-0 bottom-[6.1rem]`}
           onClick={onClick}></div>
      <div
        className={`${className} toc flex flex-col gap-2 font-proto text-2xl bg-bg absolute mb-12 left-0 bottom-full z-50 pb-4 max-w-[90vw] max-h-[85dvh] border border-accent-fg min-w-[356px] *:px-4 *:py-2 overflow-y-scroll`}>
        <span className={`sticky text-lg py-4 bg-dim-bg border-b mb-4`}>READING FORMAT</span>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <span className={`cursor-pointer flex gap-2 text-base`}>Font Size: </span>
            <span className={`flex border border-ghost *:w-fit *:px-4 items-center`}>
              <PiMinus className={`${rootFontSize <= FONT_SIZE_LIMITS.min ? 'disabled' : ''}`}
                       onClick={() => setRootFontSize(rootFontSize - 1)}/>
              <span className={`text-lg border-x border-ghost px-8`}>{rootFontSize}</span>
              <PiPlus className={`${rootFontSize >= FONT_SIZE_LIMITS.max ? 'disabled' : ''}`}
                      onClick={() => setRootFontSize(rootFontSize + 1)}/>
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <span className={`cursor-pointer flex gap-2 text-base`}>Font Style: </span>
            <span className={`flex border border-ghost *:w-fit *:px-4 items-center`}>
              {fontClass.map((f, index) => (
                <span
                  className={`border text-base ${f} ${index == fontStyle ? 'bg-dim-bg border-fg' : 'border-ghost'}`}
                  onClick={() => setFontStyle(index)}
                  key={index}>Aa</span>
              ))}
            </span>
          </div>
          {/*{share_options.map(({href, element}, index) => (*/}
          {/*  <Link key={index}*/}
          {/*        href={href}*/}
          {/*        onClick={onClick}*/}
          {/*        className={`no-underline hover:bg-dim-bg flex gap-2 items-center w-fit mr-auto text-lg `}>*/}
          {/*    {element}*/}
          {/*  </Link>*/}
          {/*))}*/}
        </div>
      </div>
    </>
  )
}
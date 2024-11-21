import React from "react";
import hljs from 'highlight.js';
// @ts-ignore
import hljsz from 'highlightjs-zig';
import 'highlight.js/styles/github-dark.css';
import Image from "next/image";
import Link from "next/link";
import {PiArrowUpRight, PiLink} from "react-icons/pi";
import {CopyToClipboard} from "@/components/ui/clipboard-copy";
import {MDXComponents} from "mdx/types";

function extractLangAndFilename(input: string): { lang: string; filename: string } | null {
  const regex = /^language-(\w+):(.+)$/;
  const match = input.match(regex);

  if (match) {
    const [, lang, filename] = match;
    return {lang, filename};
  }
  return null;
}

function Code({children, className, ...props}) {
  if (!className) {
    return <span className={`bg-blue-bg inline-block w-fit m-0 px-2`}>{children}</span>
  }

  hljs.registerLanguage('zig', hljsz);

  const file_props = className.split(" ")[0];
  const {lang, filename} = extractLangAndFilename(file_props) || {lang: "text", filename: ""};
  const language = lang.replace(/language-/, '');

  // Split code into lines and highlight each line
  const lines = children.split('\n');
  const highlightedLines = lines.map((line: string, i: number) => {
    // if (line.length === 0) return;
    const highlightedLine = hljs.highlight(line, {
      language: language || 'plaintext',
      ignoreIllegals: true
    }).value;

    return (
      <div key={i} className="table-row">
        <div className="table-cell select-none pr-4 text-right text-ghost user-select-none">
          {i + 1}
        </div>
        <div
          className="table-cell"
          dangerouslySetInnerHTML={{__html: highlightedLine}}
        />
      </div>
    );
  });

  highlightedLines.pop()

  return (
    <>
      <div className="metadata flex items-center justify-between p-4 bg-dim-bg border-b border-blue-fg">
        <div className="about flex gap-4 items-center">
          <span className={`tag font-proto bg-bg`}>{lang}</span>
          <span>{filename}</span>
        </div>
        <CopyToClipboard text={children}/>
      </div>
      <div className="overflow-x-auto">
        <div className="table min-w-full">
          <code {...props} className={`${className} relative block text-sm`}>
            {highlightedLines}
          </code>
        </div>
      </div>
    </>
  );
}

function BlogImage({...props}) {
  return (
    <span className={`w-full mx-auto flex flex-col items-center my-8 border border-ghost`}>
      <Image src={props['src']} alt={''}
             width={1000} height={1000}
             style={{width: "100%", height: "auto"}}
             className={`mx-auto`}
      />
      <span className={`w-full px-4 justify-center text-center text-dim-fg text-sm flow-root gap-4 py-4`}>
        <span className={`px-2 bg-accent-fg text-bg`}>CAPTION:</span> {props["alt"]}
      </span>
    </span>
  )
}

function Anchor({children, ...props}) {
  return (
    <a href={props['href']} {...props}
       className={`inline-flex items-center no-underline text-blue-fg hover:underline`}>
      {children} {props['href'].startsWith('https://') ? <PiArrowUpRight/> : null}
    </a>
  )
}

function Header({children, ...props}) {
  const id = children.toString().replaceAll(" ", "-").toLowerCase();
  return (
    <div className={`flex items-center gap-2`}>
      <h1 id={id} {...props} className={`${props.className} flex flex-wrap items-center gap-2`}>
        <span>
          {children}
          <Link href={`#${id}`} className={`inline-flex items-center text-lg pl-4`}>
            <PiLink className={`text-dim-fg`}/>
          </Link>
        </span>
      </h1>
    </div>
  );
}

export default {
  h1: Header,
  code: Code,
  img: BlogImage,
  a: Anchor,
} as MDXComponents
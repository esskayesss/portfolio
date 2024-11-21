import React from "react";
import {PiCopy} from "react-icons/pi";

interface CodeBlockProps {
  code: string;
  lang: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({code, lang}) => {
  return (
    <pre className={`line-numbers bg-blue-bg text-accent-fg language-${lang} p-4 pt-2 flex flex-col gap-4`}>
      <div className="flex justify-between items-center text-xs *:capitalize *:flex *:items-center">
        <span>{lang}</span>
        <span><PiCopy /> Copy</span>
      </div>
      <code>
        {code}
      </code>
    </pre>
  )
}
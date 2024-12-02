import React from "react";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className={`fixed p-8 top-0 left-0 w-screen h-screen flex flex-col gap-12 flex-grow justify-center items-center`}>
      <div className="flex flex-col gap-2 text-fg items-center">
        <div className={`font-proto flex gap-4`}>
          <span className={`text-5xl text-accent-fg`}>404</span>
          <span className={`text-lg`}>A+ For effort</span>
        </div>
        <span className={`text-center text-dim-fg  font-mono`}>The page exists in your heart. Just not on this server.</span>
      </div>
      <div className="flex gap-12 items-center">
        <Link href='/' className="btn">Back to Reality</Link>
      </div>
    </div>
  )
}
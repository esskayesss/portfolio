import React from "react";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex flex-col gap-12 flex-grow justify-center items-center`}>
      <div className="flex flex-col gap-2 text-fg items-center">
        <span className={`text-6xl font-proto`}>404 | A+ for Effort</span>
        <span className={`text-lg font-mono`}>The page exists in your heart. Just not on this server.</span>
      </div>
      <div className="flex gap-12 items-center">
        <Link href='/' className="btn">Back to Reality</Link>
      </div>
    </div>
  )
}
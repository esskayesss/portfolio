import React from "react";
import {BlogActions} from "@/components/ui/blog/actions";

export default async function BaseLayout({children, params}: Readonly<{
  children: React.ReactNode;
  params: Promise<{slug: string}>
}>) {
  const slug = (await params).slug
  return (
    <>
      {children}
      <BlogActions slug={slug} />
    </>
  );
}

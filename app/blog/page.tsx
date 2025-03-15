import {BlogCard} from "@/components/ui/blog/card";
import Link from "next/link";
import { getAllBlogPosts, getLatestBlogSlugs } from "@/lib/blogs";

import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "blog | esskayesss.",
  description: "A collection of blog posts.",
  keywords: [
    "Saurabh",  "Saurabh Sharma", "esskayesss", "esskayesss_",
    "SWE", "Portfolio", "Projects", "Technical Blog", "Programming",
  ],
  metadataBase: new URL("https://esskayesss.dev/projects"),
};

export default async function BlogHome() {
  const sortedSlugs = await getLatestBlogSlugs()
  const blogs = await getAllBlogPosts()
  return (
    <main>
      <section>
        <div className="heading">
          <h1>Latest Articles</h1>
          <Link href={`/blog/archive`}>See all</Link>
        </div>
        <div className="content">
          {sortedSlugs.length === 0 && <p>I'm just a chill guy.</p>}
          {sortedSlugs.map((slug, _idx) => (
            <BlogCard key={_idx} {...blogs[slug]} />
          ))}
        </div>
      </section>
    </main>
  );
}

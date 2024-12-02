import {BlogCard} from "@/components/ui/blog/card";
import Link from "next/link";
import {getBlogPosts} from "@/lib/blog";

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
  const articles = await getBlogPosts();

  return (
    <main>
      <div className={'section'}>
        <div className="heading">
          <h1>Latest Articles</h1>
          <Link href={`/blog/archive`}>See all</Link>
        </div>
        <div className="content">
          {articles.length === 0 && <p>I'm just a chill guy.</p>}
          {articles.map((article, _idx) => (
            <BlogCard key={_idx} {...article} />
          ))}
        </div>
      </div>
    </main>
  );
}
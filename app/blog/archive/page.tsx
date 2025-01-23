// app/blog/archive/page.tsx
import {BlogCard} from "@/components/ui/blog/card";
import {getLatestBlogSlugs, getAllBlogPosts} from "@/lib/blogs";

export default async function BlogHome() {
  const sortedSlugs = await getLatestBlogSlugs()
  const allBlogs = await getAllBlogPosts()
  return (
    <main>
      <div className={'section'}>
        <div className="heading">
          <h1>Blog Archive</h1>
        </div>
        <div className="content">
          {sortedSlugs.length === 0 && <p>I'm just a chill guy.</p>}
          {sortedSlugs.map((slug, _idx) => (
            <BlogCard key={_idx} thumbnail={false} {...allBlogs[slug]} />
          ))}
        </div>
      </div>
    </main>
  );
}

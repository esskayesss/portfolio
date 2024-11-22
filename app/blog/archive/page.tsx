// app/blog/archive/page.tsx
import {BlogCard} from "@/components/ui/blog/card";
import {getBlogPosts} from "@/lib/blog";

export default async function BlogHome() {
  const articles = await getBlogPosts();

  return (
    <main>
      <div className={'section'}>
        <div className="heading">
          <h1>Blog Archive</h1>
        </div>
        <div className="content">
          {articles.length === 0 && <p>I'm just a chill guy.</p>}
          {articles.map((article, _idx) => (
            <BlogCard key={_idx} thumbnail={false} {...article} />
          ))}
        </div>
      </div>
    </main>
  );
}
import {Blog} from "@/components/blog/blogview";
import { getLatestBlogSlugs } from "@/lib/blogs";

export async function generateStaticParams() {
  const slugs = await getLatestBlogSlugs()
  return slugs.map((slug) => ({slug: slug}))
}

export default async function BlogView({params}: {params: Promise<{slug: string}>}) {
  const slug = (await params).slug;
  return (
      <Blog slug={slug} />
  );
}

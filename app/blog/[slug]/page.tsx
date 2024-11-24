import {Blog} from "@/components/blog/blogview";
import {globby} from "globby";

export async function generateStaticParams() {
  const paths = await globby(`./content/**/*.mdx`);

  return paths.map((path) => ({
    slug: path.split('/').pop()?.replace('.mdx', ''),
  }))
}

export default async function BlogView({params}: {params: Promise<{slug: string}>}) {
  const slug = (await params).slug;
  return (
    <main className={`pb-28`} id={'blog'}>
      <Blog slug={slug} />
    </main>
  );
}
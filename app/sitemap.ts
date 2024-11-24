import {getBlogPosts} from "@/lib/blog";

export const sitemap = async () => {
  const blogs = getBlogPosts().then(res => res.map(
    (post) => (
      {
        url: `https://esskayesss.dev/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString().split('T')[0],
      }
    )
  ));
  const routes = ["", "/blog", "/blog/archive", "/support", "/projects"].map(
    (route) => ({
      url: `https://esskayesss.dev${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [
    ...routes,
    ...(await blogs),
  ]
}

export default sitemap
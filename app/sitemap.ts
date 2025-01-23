import {getAllBlogPosts} from "@/lib/blogs";

export const sitemap = async () => {
  const posts = await getAllBlogPosts()
  const blogs = Object.entries(posts).map(([slug, post]) => ({
    url: `https://esskayesss.dev/blog/${slug}`,
    lastModified: new Date(post.metadata.date).toISOString().split('T')[0],
  }))
  const routes = ["", "/blog", "/blog/archive", "/support", "/projects"].map(
    (route) => ({
      url: `https://esskayesss.dev${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [ ...routes, ...blogs ]
}

export default sitemap

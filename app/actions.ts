'use server';

export async function fetchTOC(slug: string) {
  const {getTOC} = await import('@/lib/blog');
  return await getTOC(slug);
}
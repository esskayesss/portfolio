'use server';
import { getTOC } from "@/lib/posts";

export async function fetchTOC(slug: string) {
  return await getTOC(slug);
}

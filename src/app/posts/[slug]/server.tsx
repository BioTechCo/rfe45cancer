import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getPostData(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContents);

  return {
    title: data.title,
    date: data.date,
    images: data.images || [],
    plots: data.plots || [],
  };
}
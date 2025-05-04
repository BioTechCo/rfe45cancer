import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostList from '@/app/components/PostList';
import { ListPost } from '@/types';

export default async function Home() {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith('.mdx'));

  const posts: ListPost[] = filenames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContents);
      const slug = filename.replace(/\.mdx$/, '');

      console.log(`Generated slug for ${filename}: /posts/${slug}`); // Server-side debug log

      // Validate frontmatter
      if (!data.title || !data.date || !data.excerpt) {
        console.warn(`Missing frontmatter in ${filename}`);
        return null;
      }

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
      };
    })
    .filter((post): post is ListPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Statistical Analysis Blog</h1>
      <PostList posts={posts} />
    </div>
  );
}
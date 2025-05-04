import fs from 'fs';
import path from 'path';
import PostList from '@/app/components/PostList';
import { ListPost } from '@/types';

export default async function Home() {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith('.mdx'));

  const posts: ListPost[] = [];

  // Process each post
  for (const filename of filenames) {
    const slug = filename.replace(/\.mdx$/, '');
    try {
      // Import the metadata file from the dedicated metadata directory
      const { default: metadata } = await import(`@/metadata/${slug}`);

      // Skip if missing required fields
      if (!metadata.title || !metadata.date) {
        console.warn(`Missing required metadata in metadata/${slug}.ts`);
        continue;
      }

      posts.push({
        slug,
        title: metadata.title,
        date: metadata.date,
        excerpt: metadata.excerpt || 'No excerpt available',
      });
    } catch (error) {
      console.warn(`Error loading metadata for ${slug}:`, error);
    }
  }

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">RFE45Cancer: DNA methylation and cancer</h1>
      <PostList posts={posts} />
    </div>
  );
}

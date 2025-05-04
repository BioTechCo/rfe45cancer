import fs from 'fs';
import path from 'path';
import ClientComponent from './client';
import { PostData } from '@/types';
import { notFound } from 'next/navigation';

// Generate static params for all MDX files during build time
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith('.mdx'));
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

// Load post data - using the slug directly, not from params
async function getPostData(slug: string): Promise<PostData | null> {
  try {
    // Import the metadata file from the dedicated metadata directory
    const metadata = await import(`@/metadata/${slug}`);
    return metadata.default;
  } catch (error) {
    console.warn(`Error loading metadata for ${slug}:`, error);
    return null;
  }
}

// Using the pattern from the Next.js documentation for dynamic parameters
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  
  const postData = await getPostData(slug);

  if (!postData) {
    return notFound();
  }

  return <ClientComponent slug={slug} postData={postData} />;
}

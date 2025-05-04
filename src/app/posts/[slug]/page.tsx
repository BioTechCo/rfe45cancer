import fs from 'fs';
import path from 'path';
import { getPostData } from './server';
import ClientComponent from './client';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith('.mdx'));
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.slug);
  
  if (!postData) {
    return {
      notFound: true,
    };
  }

  return <ClientComponent slug={resolvedParams.slug} postData={postData} />;
}
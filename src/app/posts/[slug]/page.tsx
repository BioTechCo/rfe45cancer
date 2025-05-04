import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ClientComponent from './client';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith('.mdx'));
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

async function getPostData(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`); // Server-side debug log
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContents);

  return {
    title: data.title,
    date: data.date,
    volcano_plot: data.volcano_plot || "",
    plots: data.plots || [],
  };
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
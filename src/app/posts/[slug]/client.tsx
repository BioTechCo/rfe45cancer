"use client";

import dynamic from 'next/dynamic';
import BlogPost from '@/components/BlogPost';

interface Post {
  title: string;
  date: string;
  content: React.ReactNode;
  images: string[];
  plots: string[];
}

interface ClientComponentProps {
  slug: string;
  postData: {
    title: string;
    date: string;
    images: string[];
    plots: string[];
  };
}

export default function ClientComponent({ slug, postData }: ClientComponentProps) {
  // Dynamically import the MDX file
  const MDXContent = dynamic(() => import(`@/posts/${slug}.mdx`));

  const post: Post = {
    title: postData.title,
    date: postData.date,
    content: <MDXContent />,
    images: postData.images,
    plots: postData.plots,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogPost post={post} />
    </div>
  );
}
"use client";

import dynamic from 'next/dynamic';
import BlogPost from '@/components/BlogPost';
import { BlogPost as BlogPostType, PostData } from '@/types';

interface ClientComponentProps {
  slug: string;
  postData: PostData;
}

export default function ClientComponent({ slug, postData }: ClientComponentProps) {
  const MDXContent = dynamic(() => import(`@/posts/${slug}.mdx`));

  const post: BlogPostType = {
    title: postData.title,
    date: postData.date,
    content: <MDXContent />,
    volcano_plot: postData.volcano_plot || "",
    plots: postData.plots || [],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogPost post={post} />
    </div>
  );
}
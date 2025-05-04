"use client";

import dynamic from 'next/dynamic';
import { PostData } from '@/types';

interface ClientComponentProps {
  slug: string;
  postData: PostData;
}

export default function ClientComponent({ slug, postData }: ClientComponentProps) {
  const MDXContent = dynamic(() => import(`@/posts/${slug}.mdx`));

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
        <div className="prose max-w-none">
          <MDXContent />
        </div>
      </article>
    </div>
  );
}
